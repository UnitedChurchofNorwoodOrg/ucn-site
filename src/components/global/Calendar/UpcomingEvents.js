import { useEffect, useState } from "react";
import ICAL from "ical.js";

const UpcomingEvents = () => {
const [events, setEvents] = useState({});

useEffect(() => {
const fetchEvents = async () => {
try {
const res = await fetch(
"https://api.allorigins.win/raw?url=" +
encodeURIComponent(
"https://calendar.google.com/calendar/ical/1b1b5d22d089ff60b2ef371f51fcda2a7bc2aab3c4243e0ea025f27bb71d789f@group.calendar.google.com/public/basic.ics"
)
);
    const text = await res.text();

    const jcalData = ICAL.parse(text);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents("vevent");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const next6 = new Date();
    next6.setDate(today.getDate() + 6);
    next6.setHours(23, 59, 59, 999);

    const grouped = {};
    const seen = new Set();

    vevents.forEach((vevent) => {
      const event = new ICAL.Event(vevent);

      const iterator = event.iterator();
      let occurrence;

      while ((occurrence = iterator.next())) {
        const start = occurrence.toJSDate();

        if (start > next6) break;
        if (start < today) continue;

        const uid = event.uid + start.toISOString();
        if (seen.has(uid)) continue;
        seen.add(uid);

        const dateKey = start.toDateString();

        const time = start.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });

        const rawTitle = event.summary || "Event";
        const title = rawTitle.replace(/[\u{1F300}-\u{1FAFF}]/gu, "").trim();

        const venue = event.location || "Church";

        if (!grouped[dateKey]) grouped[dateKey] = [];

        grouped[dateKey].push({
          time,
          title,
          venue,
          start
        });
      }
    });

    Object.keys(grouped).forEach((date) => {
      grouped[date].sort((a, b) => a.start - b.start);
    });

    setEvents(grouped);
  } catch (error) {
    console.error("Error loading calendar:", error);
  }
};

fetchEvents();

}, []);

return ( <div>
{Object.keys(events).length === 0 ? (
<p style={{ color: "#6b7280", fontSize: "14px" }}>
No events scheduled for this week </p>
) : (
Object.entries(events)
.sort((a, b) => new Date(a[0]) - new Date(b[0]))
.map(([date, items]) => {
const isToday =
new Date(date).toDateString() === new Date().toDateString();

        return (
          <div key={date} style={{ marginBottom: "14px" }}>
            <div
              style={{
                fontWeight: "600",
                marginBottom: "6px",
                color: isToday ? "#1f3a5f" : "#1f2937"
              }}
            >
              {isToday ? "Today • " : ""}
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric"
              })}
            </div>

            {items.map((e, i) => (
              <div
                key={i}
                style={{
                  background: "#f9fafb",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  marginBottom: "6px",
                  border: "1px solid #e5e7eb"
                }}
              >
                <div style={{ fontSize: "14px", fontWeight: "500" }}>
                  {e.time} — {e.title}
                </div>

                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  📍 {e.venue}
                </div>
              </div>
            ))}
          </div>
        );
      })
  )}
</div>

);
};

export default UpcomingEvents;
