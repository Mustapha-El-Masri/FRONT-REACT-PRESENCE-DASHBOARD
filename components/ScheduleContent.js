import React from "react";
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const data = [
  {
    Id: 1,
    Subject: "Mustapha El Masri",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 2,
    Subject: "Karim Benzema",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 3,
    Subject: "Scarlett Johansson",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 4,
    Subject: "Mouadh Derwich",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 5,
    Subject: "Blake Lively",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 6,
    Subject: "Leonardo DiCaprio",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 7,
    Subject: "Sayf Sadak",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 8,
    Subject: "Carlos Casemiro",
    Location: "Alpha",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 9,
    Subject: "Antonio Rüdiger",
    Location: "Beta",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 10,
    Subject: "Ali Benmahmood",
    Location: "Beta",
    StartTime: "2022-09-30T08:00:00.000Z",
    EndTime: "2022-09-30T17:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
];

function ScheduleContent() {
  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <ScheduleComponent height="100%" eventSettings={{dataSource: data}} selectedDate={new Date(2022,4,23)} >
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            Resize,
            DragAndDrop,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
}

export default ScheduleContent;
