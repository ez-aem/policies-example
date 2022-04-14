# policies-example
Sample maven project that uses the @ez-aem/policies npm package to manage AEM Policies &amp; Style System.

## Usage
1. Install into your AEM archetype or site-template project with degit and npx.

```bash
npx degit github:ez-aem/policies-example
```

2. Find and Replace PROJECTNAME with your project's name. This will also need to be done on folders, so make sure it's a name that Maven will accept. If you are working on an archetype project, you should replace with the group name, and we suggest renaming the root folder to `ui.policies`. 

3. Install the npm depenencies.
    
```bash
npm ci
```

4. Run the example.

```bash
npm run generate
```

5. Run the maven build example
    
```bash
mvn clean install
```

6. Update the policies and style system code to your liking. Further documentation can be found at [@ez-aem/policies](https://www.npmjs.com/package/@ez-aem/policies).

7. Integrate into your existing Maven project by updating the parent pom information in the pom.xml file. And add the maven submodule to your parent pom's build `<modules>` section.