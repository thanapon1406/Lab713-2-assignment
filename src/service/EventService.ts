import type Event from "../models/Event";
// import {
//   getAllEvents as allEvents,
//   getEventByCategory as eventByCategory,
//   getEventById as eventById,
//   addEvent as addNewEvent,
// } from "../repositories/EventRepository";
import * as repo from "../repositories/EventRepository";

export async function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export async function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export async function getEventById(id: number): Promise<Event | undefined> {
  return repo.getEventById(id);
}

export async function addEvent(newEvent: Event): Promise<Event> {
  return repo.addEvent(newEvent);
}
