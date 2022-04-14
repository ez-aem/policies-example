# policies-example
Sample maven project that uses the @ez-aem/policies npm package to manage AEM Policies &amp; Style System.

## Usage
1. Create the policies folder. If you are working on an Archetype project, the name should be `ui.policies`. If you are working on a site-template project, then we recommend `/src/policies`. 

2. Install into your AEM archetype or site-template project with degit and npx.

```bash
cd ui.policies 
# or
cd /src/policies

npx degit github:ez-aem/policies-example
```

3. Find and Replace PROJECTNAME with your project's name. This will also need to be done on folders, so make sure it's a name that Maven will accept.

4. Install the npm depenencies.
    
```bash
npm ci
```

5. Run the example.

```bash
npm run generate
```

6. Run the maven build example
    
```bash
mvn clean install
```

7. Update the policies and style system code to your liking. Further documentation can be found at [@ez-aem/policies](https://www.npmjs.com/package/@ez-aem/policies).

8. Integrate into your existing Maven project by updating the parent pom information in the pom.xml file. And add the maven submodule to your parent pom's build `<modules>` section.