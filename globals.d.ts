declare module '*.yaml' {
    type Portfolio = {
        education: {
            title: string,
            school: string,
            date: string,
        }[],
        skills: {
            tools: string[],
            languages: string[],
        },
        work: {
            company: string,
            position: string,
            location: string,
            date: string,
            items: string[],
        }[],
        competitions: {
            event: string,
            date: string,
            location: string,
            items: string[],
        }[],
    };

    const data: Portfolio;
    export default data;
}
