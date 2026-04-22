const CalendarSimple = () => {
  const calendarId =
    "1b1b5d22d089ff60b2ef371f51fcda2a7bc2aab3c4243e0ea025f27bb71d789f@group.calendar.google.com";

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        background: "#ffffff"
      }}
    >
      {/* 📅 Calendar (Agenda View) */}
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
          calendarId
        )}&mode=AGENDA&showTitle=0&showTabs=0&showCalendars=0&showPrint=0`}
        style={{
          border: 0,
          width: "100%",
          height: "220px" // 👈 compact height
        }}
        frameBorder="0"
        scrolling="no"
        title="Upcoming Events"
      />
     </div>
  );
};

export default CalendarSimple;