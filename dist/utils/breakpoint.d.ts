import React from 'react';
interface IMatchedQueries {
    ns: boolean;
    m: boolean;
    l: boolean;
    or: boolean;
}
declare type BreakPointProps = {
    children: React.ReactNode;
};
declare const BreakpointProvider: ({ children }: BreakPointProps) => JSX.Element;
declare function useBreakPoint(): IMatchedQueries;
export { useBreakPoint, BreakpointProvider };
