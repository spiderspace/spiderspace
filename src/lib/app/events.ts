// TODO per-event params

// TODO where should this live and what should it be called? `BlockEvent`?
// TODO or (or `Command` and `Effect`?)
export interface ClientEvent {
	name: string;
	params?: any;
}

export const events: Map<string, object> = new Map([['ToggleDevmode', {}]]);
