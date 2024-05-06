interface Bird {
    eat(): void;
}

interface RunningBird {
    run(): void;
}

interface FlyingBird {
    fly(): void;
}

class Tucan implements Bird, RunningBird, FlyingBird{

    public fly(): void {
        console.log('Tucan is flying');
    }

    public eat(): void {
        console.log('Tucan is eating');
    }

    public run(): void {
        console.log('Tucan is running');
    }
}

class hummingbird implements Bird, FlyingBird{

    public fly(): void {
        console.log('Hummingbird is flying');
    }

    public eat(): void {
        console.log('Hummingbird is eating');
    }
}

class Ostrich implements Bird, RunningBird{

    public eat(): void {
        console.log('Ostrich is eating');
    }

    public run(): void {
        console.log('Ostrich is running');
    }
}