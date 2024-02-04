type Mods = Record<string, boolean | string>

export function classNames(cls : string, mods : Mods = {}, additional : string[] = []) : string{
    return [
        cls, 
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        .filter(([key,val]) => Boolean(val))
        .map(([key,val]) => key)
    ].join(' ');
}
