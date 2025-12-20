// import type Event from "../models/Event";
import type { eventModel as Event } from "../generated/prisma/models/event";
import type newEvent from "../models/Event";
// import {
//   getAllEvents as allEvents,
//   getEventByCategory as eventByCategory,
//   getEventById as eventById,
//   addEvent as addNewEvent,
// } from "../repositories/EventRepository";
// import * as repo from "../repositories/EventRepository";
// import * as repo from "../repositories/EventRepositoryDb";
import * as repo from "../repositories/EventRepositoryPrisma";
export async function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export async function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export async function getAllEventsWithOrganizer(): Promise<Event[]> {
  return repo.getAllEventsWithOrganizer();
}

export async function getEventById(
  id: number
): Promise<Event | undefined | null> {
  return repo.getEventById(id);
}

export async function addEvent(newEvent: newEvent): Promise<Event> {
  return repo.addEvent(newEvent);
}
