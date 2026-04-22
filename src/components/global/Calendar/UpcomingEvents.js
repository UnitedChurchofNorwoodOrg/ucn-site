import { useEffect, useState } from "react";
import ICAL from "ical.js";

const UpcomingEvents = () => {
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://ucn-calendar-api.vercel.app/api/calendar"
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
            // ✅ FIX: Force correct timezone
            const start = new Date(
              occurrence.toJSDate().toLocaleString("en-US", {
                timeZone: "America/New_York"
              })
            );

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
            const title = rawTitle
              .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
              .trim();

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
      } catch (err) {
        console.error("Error loading calendar:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ✅ Loading state
  if (loading) {
    return (
      <p style={{ color: "#6b7280", fontSize: "14px" }}>
        Loading events...
      </p>
    );
  }

  // ✅ Error state
  if (error) {
    return (
      <p style={{ color: "#b91c1c", fontSize: "14px" }}>
        Unable to load events right now.
      </p>
    );
  }

  // ✅ Empty state
  if (Object.keys(events).length === 0) {
    return (
      <p style={{ color: "#6b7280", fontSize: "14px" }}>
        No events scheduled for this week.
      </p>
    );
  }

  const todayStr = new Date().toDateString();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div>
      {Object.entries(events)
        .sort((a, b) => new Date(a[0]) - new Date(b[0]))
        .map(([date, items]) => {
          const dateObj = new Date(date);
          const isToday = dateObj.toDateString() === todayStr;
          const isTomorrow =
            dateObj.toDateString() === tomorrow.toDateString();

          return (
            <div key={date} style={{ marginBottom: "14px" }}>
              <div
                style={{
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: isToday ? "#1f3a5f" : "#1f2937"
                }}
              >
                {isToday
                  ? "Today • "
                  : isTomorrow
                  ? "Tomorrow • "
                  : ""}
                {dateObj.toLocaleDateString("en-US", {
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
        })}
    </div>
  );
};

export default UpcomingEvents;