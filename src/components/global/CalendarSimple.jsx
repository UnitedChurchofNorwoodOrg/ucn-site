const CalendarSimple = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=1b1b5d22d089ff60b2ef371f51fcda2a7bc2aab3c4243e0ea025f27bb71d789f%40group.calendar.google.com&mode=AGENDA&showTitle=0&showTabs=0&showCalendars=0&showPrint=0"
      style={{
        border: 0,
        width: "100%",
        height: "280px"
      }}
      frameBorder="0"
      scrolling="no"
      title="Church Events"
    />
  );
};

export default CalendarSimple;