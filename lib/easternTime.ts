export const EASTERN_TIME_ZONE = "America/New_York";

const easternDate = new Intl.DateTimeFormat("en-US", {
  timeZone: EASTERN_TIME_ZONE,
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const easternDateTime = new Intl.DateTimeFormat("en-US", {
  timeZone: EASTERN_TIME_ZONE,
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
});

export function formatEasternDate(timestamp: string): string {
  return easternDate.format(new Date(timestamp));
}

export function formatEasternDateTime(timestamp: string): string {
  return easternDateTime.format(new Date(timestamp));
}

export function getEasternTimeZoneAbbreviation(now = new Date()): string {
  return easternDateTime.formatToParts(now).find(part => part.type === "timeZoneName")?.value ?? "ET";
}
