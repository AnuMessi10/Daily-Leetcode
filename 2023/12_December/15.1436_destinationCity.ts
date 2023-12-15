function destCity(paths: string[][]): string {
    const map = new Map<string, string>();
    paths.forEach((path) => map.set(path[0], path[1]));
    let city = paths[0][0];
    while (map.has(city)) 
        city = map.get(city)!;

    return city;
}