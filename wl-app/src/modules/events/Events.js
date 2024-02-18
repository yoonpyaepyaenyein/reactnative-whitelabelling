import baseUrl from '../../baseUrl';

const fetchEvents = async () => {
  const events = await fetch(`${baseUrl}/events`);
  return await events.json();
};
