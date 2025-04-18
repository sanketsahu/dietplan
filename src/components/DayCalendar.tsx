import { useState, useEffect } from "react";
import { format, parse, addDays, subDays } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { weeklyPlan, type MealEvent } from "@/data/diet";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HOURS = Array.from({ length: 16 }, (_, i) => i + 8); // 8 AM to 11 PM

interface DayCalendarProps {
  initialDate?: Date;
}

export function DayCalendar({ initialDate = new Date() }: DayCalendarProps) {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<MealEvent | null>(null);

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = format(selectedDate, "EEEE") as keyof typeof weeklyPlan;
  const dayPlan = weeklyPlan[dayOfWeek];

  const handlePreviousDay = () => setSelectedDate(subDays(selectedDate, 1));
  const handleNextDay = () => setSelectedDate(addDays(selectedDate, 1));

  const getEventDuration = (event: MealEvent) => {
    if (!event.end) return 0.5; // Default 30min duration if no end time

    const startTime = parse(event.start, "HH:mm", new Date());
    const endTime = parse(event.end, "HH:mm", new Date());
    const durationHours = endTime.getHours() - startTime.getHours();
    const durationMinutes = endTime.getMinutes() - startTime.getMinutes();

    return durationHours + durationMinutes / 60;
  };

  const getEventPosition = (event: MealEvent) => {
    const startTime = parse(event.start, "HH:mm", new Date());
    const startHour = startTime.getHours() + startTime.getMinutes() / 60;
    const duration = getEventDuration(event);

    return {
      top: `${(startHour - 8) * 100}px`,
      height: `${duration * 100}px`,
    };
  };

  const getCurrentTimePosition = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const timeInHours = hours + minutes / 60;
    return {
      top: `${(timeInHours - 8) * 100}px`,
    };
  };

  const getCategoryColor = (category: MealEvent["category"]) => {
    const colors: Record<MealEvent["category"], string> = {
      meal: "bg-blue-100 border-blue-500",
      drink: "bg-purple-100 border-purple-500",
      supplement: "bg-orange-100 border-orange-500",
      workout: "bg-green-100 border-green-500",
      snack: "bg-yellow-100 border-yellow-500",
      routine: "bg-gray-100 border-gray-500",
    };
    return colors[category];
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <Button variant="ghost" onClick={handlePreviousDay}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-lg font-semibold">
          {format(selectedDate, "EEEE, MMM d")}
        </div>
        <Button variant="ghost" onClick={handleNextDay}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="relative border rounded-lg overflow-hidden bg-white">
        <div className="absolute left-0 top-0 w-16 h-full border-r bg-gray-50">
          {HOURS.map((hour) => (
            <div
              key={hour}
              className="h-[100px] border-b px-2 text-sm text-gray-500 flex items-start pt-2"
            >
              {format(new Date().setHours(hour, 0), "ha")}
            </div>
          ))}
        </div>

        {/* Events Container */}
        <div className="ml-16 relative">
          {/* Time blocks */}
          {HOURS.map((hour) => (
            <div key={hour} className="h-[100px] border-b border-gray-100" />
          ))}

          {/* Current time indicator */}
          {format(currentTime, "EEEE") === dayOfWeek && (
            <div
              className="absolute left-0 w-full border-t-2 border-red-500 z-20"
              style={getCurrentTimePosition()}
            />
          )}

          {/* Events */}
          {dayPlan.map((event: MealEvent, index: number) => (
            <div
              key={index}
              className={`absolute left-2 right-2 p-2 rounded border-l-4 cursor-pointer transition-transform hover:scale-[1.02] ${getCategoryColor(
                event.category
              )}`}
              style={getEventPosition(event)}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex items-baseline gap-2">
                  <div className="text-sm font-medium">{event.label}</div>
                  <div className="text-xs text-gray-400 line-clamp-1 flex-1">
                    {event.items.join(", ")}
                  </div>
                </div>
                {getEventDuration(event) > 0.25 && ( // Only show time for events > 15 mins
                  <div className="text-xs text-gray-500">
                    {event.start}
                    {event.end ? ` - ${event.end}` : ""}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEvent?.label}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-sm text-gray-500">
              {selectedEvent?.start}
              {selectedEvent?.end ? ` - ${selectedEvent.end}` : ""}
            </div>
            <div className="space-y-2">
              {selectedEvent?.items.map((item: string, index: number) => (
                <div key={index} className="text-sm">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
