import typia, { type tags } from 'typia';

/** define the schema of the member */
type IMember = {
	email: string & tags.Format<'email'>;
	age: number & tags.ExclusiveMinimum<19> & tags.Maximum<100>;
};

export function isMember(value: unknown): value is IMember {
  return typia.is<IMember>(value);
}
