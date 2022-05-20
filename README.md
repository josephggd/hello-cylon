**Onboarding Process for Team Cylon Developers**

![Cylon Logo]([cylon.gif]https://github.com/josephggd/hello-cylon/blob/master/hello-frontend/public/cylon.gif "Team Cylon")

# Necessary Software:

- Your editor of choice (typically [Visual Studio Code](https://code.visualstudio.com/Download "Visual Studio Code Download") or [Intellij IDEA Community Edition](https://www.jetbrains.com/idea/download/#section=windows))
- Git version control CLI: [Git](https://git-scm.com/download/win "Git Download")
- [Java](https://adoptopenjdk.net/ "Java Download") - Version 11\*
- [NodeJS](https://nodejs.org/en/download/ "NodeJS Download") - Version 16\*

<sub>\* Save the installation path for each program</sub>  

# Setting Up Your Environment Variables:

## Windows:

1. Create a new system variable named: `JAVA_HOME`
   - Set it's value to your installed Java path e.g. `C:\ProgramFiles\AdoptOpenJDK\jdk-xxx`
1. Edit your existing `PATH` system variable, and add:
   - Your node installed path e.g. `C:\ProgramFiles\nodejs`
   - Your "JAVA_HOME" environment variable `%JAVA_HOME%\bin`
1. Click "Ok"

## Mac:

1. Within a terminal find the path to your `.bash_profile` by using `~/.bash-profile` and open it with `open ~/.bash_profile`
   - If not found execute:
     - `touch ~/.bash_profile`
     - `open ~/.bash_profile`  

#### All within `.bash_profile`

1. Create a new system variable named `JAVA_HOME` with: `export JAVA_HOME=<installed_java_path>`
    - e.g. `export JAVA_HOME=/usr/local/bin/AdoptOpenJDK/jdk-xxx`
1. Edit your existing `PATH` system variable by adding:
   - Your node installed path e.g. `export PATH=/usr/local/bin/nodejs:$PATH`
   - Your "JAVA_HOME" environment variable e.g. `export PATH=$JAVA_HOME/bin:$PATH`
1. Save and close `.bash_profile`
1. Within your terminal execute `source ~/.bash-profile`

<sub>Each `export` command should be on it's own line within `.bash_profile`
