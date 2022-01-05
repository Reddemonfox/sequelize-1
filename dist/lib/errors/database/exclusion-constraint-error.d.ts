import DatabaseError, { DatabaseErrorSubclassOptions } from '../database-error';
interface ExclusionConstraintErrorOptions {
    constraint: string;
    fields: Record<string, string | number>;
    table: string;
}
/**
 * Thrown when an exclusion constraint is violated in the database
 */
declare class ExclusionConstraintError extends DatabaseError implements ExclusionConstraintErrorOptions {
    constraint: string;
    fields: Record<string, string | number>;
    table: string;
    constructor(options: DatabaseErrorSubclassOptions & ExclusionConstraintErrorOptions);
}
export default ExclusionConstraintError;
