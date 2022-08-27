declare module '*.yaml' {
    export interface Portfolio {
        education: Education[];
        skills: Skills;
        work: Work[];
        competitions: Competition[];
    }

    export interface Competition {
        event: string;
        date: string;
        location: string;
        items: string[];
    }

    export interface Education {
        title: string;
        school: string;
        date: string;
    }

    export interface Skills {
        tools: string[];
        languages: string[];
    }

    export interface Work {
        company: string;
        position: string;
        location: string;
        date: string;
        items: string[];
    }

    const data: Portfolio;
    export default data;
}
