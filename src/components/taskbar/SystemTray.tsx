import React, { useEffect, useState } from "react";

import moment from "moment";
import "moment/locale/id"; // Import bahasa Indonesia atau sesuai kebutuhan
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

import { Bell } from "lucide-react";

function DateTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useEffect(() => {
    // Set bahasa sesuai dengan bahasa pengguna di browser
    moment.locale(navigator.language || "en");

    // Update waktu dan tanggal setiap detik
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm")); // Format 'LTS' untuk menampilkan jam
      setCurrentDate(moment().format("DD MMMM YYYY")); // Format 'LL' untuk menampilkan tanggal
    }, 1000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div className="text-right flex flex-col text-black font-semibold">
            <span className="text-sm">{currentTime}</span>
            <span className="text-xs">{currentDate}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 lg:w-[250px]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border space-x-0 m-0"
          />
        </PopoverContent>
      </Popover>
    </>
  );
}

export default function SystemTray() {
  return (
    <div className="flex flex-row justify-end">
      <div className="mx-2">
        <DateTime />
      </div>
      <div className="mr-2">
        <Button variant="ghost" size="icon">
          <Bell size={100} />
        </Button>
      </div>
    </div>
  );
}
