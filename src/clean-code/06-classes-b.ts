(() => {
    
    type Gender = 'M'|'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;
        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    const newPerson = new Person(
        {
            name: 'Fernando',
            gender: 'M',
            birthdate: new Date('1985-10-21')
        }
    );
    console.log({newPerson});

    interface UserProps {
        email: string,
        role: string,
        personProps: PersonProps
    }

    class User extends Person{
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor(
            {email, role, personProps}: UserProps
        ){
            super(personProps);
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        UserProps: UserProps;
    }

    class UserSettings extends User{
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            {workingDirectory, lastOpenFolder, UserProps}: UserSettingsProps
        ){
            super(UserProps);
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
            workingDirectory: 'Documents',
            lastOpenFolder: 'Downloads',
            UserProps: {
                email: 'test@gmail.com',
                role: 'admin',
                personProps: {
                    name: 'Fernando',
                    gender: 'M',
                    birthdate: new Date('1985-10-21')
                }
            }
        }
    );
    console.log(userSettings);
})();