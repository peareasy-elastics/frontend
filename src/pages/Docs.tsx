import Sidebar from '../components/UI/Sidebar/Sidebar';

// How to create a code block

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const code_block = `<div className="min-h-screen bg-gray-800 text-center">
//   <BrowserRouter>
//     <NavigationBar />
//     <Switch>
//       <Route path={'/docs'} component={Docs} />
//       <Route path={'/about'} component={About} />
//       <Route path={'/'} component={Homepage} />
//     </Switch>
//   </BrowserRouter>
// </div>`;
//
// <SyntaxHighlighter language="javascript" style={nord}>
//   {code_block}
// </SyntaxHighlighter>;

const Docs = () => {
  return (
    <>
      <Sidebar />
      <main
        className={
          'container mx-auto w-1/2 space-y-5 pb-10 pt-20 text-secondary text-left'
        }
      >
        <h1 className="text-2xl bg-primary-800 p-4 rounded" id="introduction">
          Introduction
        </h1>
        <p className="text-m">
          For a developer, setting up a new project from scratch can be a
          diﬀicult task. The developer has to come up with a good overall design
          and architecture, while also choosing which tech stacks to use. By
          picking the correct choices from the beginning, a lot of time spent
          refactoring code in the future can be mitigated and the focus of the
          developer can be on developing cool features instead!
        </p>
        <p className="text-m">
          Exemplar is a framework with the intention to help developers build
          full stack software solutions, by providing an out-of-the-box template
          to generate a project, with a frontend, backend consisting of
          microservices, message queue and a DevOps setup with pipelines for
          automatic testing and deployment. The motivation behind this is, to
          ensure a software project doesn't run in to scalability issues, and in
          general help the project evolving in a direction that satisfy both
          short-term, but especially long-term requirements. From the rest of
          the documentation page, we will focus on the project that exemplar
          generates for you.
        </p>
        <h2
          className="text-xl bg-primary-800 p-2 rounded"
          id="how-does-it-work"
        >
          How does it work?
        </h2>
        <p className="text-m">
          Imagine you, a developer, wants to start a new project. What would be
          the first steps you take? Probably picking an adequate frontend and
          backend technology and create a Git repository. Afterwards, you would
          probably setup some testing framework, write a pipeline to ensure
          automatic deployment to a cloud and more. By looking at the diagram,
          the idea behind Exemplar is, that all of this is provied to you
          already. You are simply asked to authorise your Github account and
          choose a project name and a project is generated for you. (Fix img
          below - looks ugly)
        </p>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/docs/overview.png'}
            alt="overview"
            className="w-2/4 m-auto rounded-lg"
          />
        </div>
        <h2 className="text-xl bg-primary-800 p-2 rounded" id="tech-stack">
          Tech stack
        </h2>
        <p className="text-m">
          Before we are diving deeper into what exactly is generated, we would
          just like to show the tech stack that you will have available in your
          generated project.
        </p>
        <ul className="list-disc pl-8 text-sm font-mono bg-gray-800 rounded p-4">
          <li>React with TypeScrip (Dockerized) ✅</li>
          <li>Nestjs applications with Typescript (Dockerized) ✅</li>
          <li>Redis (Dockerized) ✅</li>
          <li>Git submodules ✅</li>
          <li>Github actions ✅</li>
          <li>Github pages ✅</li>
          <li>Docker-compose ✅</li>
          <li>Webdriver.io (Selenium grid) ✅</li>
          <li>Postman automation ✅</li>
          <li>
            Kubernetes integration including deployment files for each app ✅
          </li>
        </ul>
        <h1
          className="text-2xl  bg-primary-800 p-4 rounded"
          id="whats-generated"
        >
          What's generated
        </h1>
        <p className="text-m">
          Now, let's get into what Exemplar generates for you. There are three
          main applications, a frontend and two microservices; all three are
          dockerized. Besides that, there are test suites, build, test,
          deployment pipelines as well as docker orchestration tools. A lot of
          these technologies does not live in a specific app, but cross-app. It
          might seem counter-intuitive to develop microservices and still rely
          on some sort of centralization, but for example E2E tests or
          orchestration tools such as Kubernetes simply needs to be in a
          centralized context. Therefore, it makes sense to start explaining the
          root project.
        </p>
        <h2 className="text-xl bg-primary-800 p-2 rounded" id="root-repository">
          Root repository (System)
        </h2>
        <p className="text-m">
          When we are done generating the code for you, you will be presented
          with a link to the root repository. The root project will be a stand
          alone Github repository which contains references to all the
          repositories we have generated. The different references are so called{' '}
          <a
            href="https://git-scm.com/book/en/v2/Git-Tools-Submodules"
            target="_blank"
          >
            submodules
          </a>
          , which are basically just links to other stand alone repositories -
          but it allows you to clone (download) the entire project in one go!
        </p>
        <p>
          Apart from the submodule references, the root project also contains a
          <a href="https://docs.docker.com/compose/" target="_blank">
            {' '}
            docker-compose
          </a>{' '}
          file. With this file, after you've downloaded the project, you can
          spin up the entire project with the command docker-compose up. This is
          because all three apps are dockerized as mentioned before.
          Docker-compose is a good tool for local docker-orchestration, but in a
          production context it is inadequate. Therefore, there is also provided
          support to deploy the application using{' '}
          <a href="https://kubernetes.io/" target="_blank">
            {' '}
            Kubernetes
          </a>
          . Below is an example of the application could be deployed using
          Kubernetes, and it is showing a state with multiple service pods. This
          could indicate that the MS pods have been under some load, and
          therefore the system deemed it necessary to deploy several pods.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/docs/system_diagram_k8.svg'}
          alt="overview"
          className="w-4/6 m-auto"
        />
        <p>
          Seen below is the folder structure of the generated app, where the
          building, deployment, orchestration files and more is shown. DevOps
          pipelines and Github actions will be shown later.
        </p>
        <img
          src={process.env.PUBLIC_URL + '/docs/git_structure.png'}
          alt="overview"
          className="w-5/6 m-auto"
        />
        <p>
          Specifically, the files above means that the project supports the
          following features:
        </p>
        <ul className="list-disc pl-8 text-sm font-mono bg-gray-800 rounded p-4">
          <li>
            Docker orchestration for local development using docker-compose ✅
          </li>
          <li>
            Deployment files used to deploy the microservices and Redis into
            Kubernetes clusters either locally or on a cloud-provider ✅
          </li>
          <li>
            Local deployment, scaling and management of containerized
            applications using Kubernetes and minikube ✅
          </li>
          <li>
            Guide on how to deploy the backend on Amazons EKS (Elastic
            Kubernetes service) ✅
          </li>
          <li>Script to build all Docker images ✅</li>
        </ul>
        <h2
          className="text-xl bg-primary-800 p-2 rounded"
          id="frontend-repository"
        >
          Frontend repository
        </h2>
        <ul className="list-disc pl-8">
          <li>
            The frontend application is a React application with Typescript
          </li>
          <li>Automatic Github deployment to public URL with Github Pages</li>
          <li>Selenium e2e test-suite setup and example test</li>
          <li>Integration tests setup and example test</li>
          <li>Unit tests setup and example test</li>
          <li>
            Github actions to build and test automatically, upon opening a pull
            request
          </li>
        </ul>
        <p className="text-m">
          So, the most flashy part of your newly generated project is definitely
          the frontend. This repository has the code for an entire web
          application developed in{' '}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>
          ! We have chosen to use{' '}
          <a href="https://www.typescriptlang.org/" target="_blank">
            Typescript
          </a>{' '}
          as the development language for the web application, but you can also
          develop ReactJS web apps in Javascript.
        </p>
        <p className="text-m">
          Just like all the other repositories we generate for you, we have
          wrapped the frontend in a docker container. The configurations for the
          docker container can be found in the Dockerfile - it allows you to run
          the frontend in pretty much any environment, abstracting away the OS
          details of the specific environment you're in.
        </p>
        <p className="text-m">
          From the get go, the frontend contains a simple login component, that
          allows the user to authenticate themselves with a username and a
          password. When you log in, the web application actually communicates
          with the backend which is divided into two repositories. The Api
          repository and the MS repository.
        </p>
        <h2 className="text-xl bg-primary-800 p-2 rounded" id="api-repository">
          Api repository
        </h2>
        <p className="text-m">
          The Api repository is the gateway into your backend. It's a standalone
          <a href="https://nestjs.com/" target="_blank">
            {' '}
            nestJS project
          </a>{' '}
          written in Typescript, which serves the API to the outside world - and
          in this case it serves the frontend web application we generated for
          you. In this project you write the different endpoints you want to
          have for your backend. To allow the user to login we have already
          created a /login endpoint, which expects a username and a password as
          input. These details will be forwarded to the relevant microservice
          through a RabbitMQ message queue. In the case of the login endpoint
          the relevant microservice is the user microservice, which has its own
          standalone repository - the user-ms repository which is up next!
        </p>
        <h2
          className="text-xl bg-primary-800 p-2 rounded"
          id="user-ms-repository"
        >
          User ms repository
        </h2>
        <p className="text-m">
          The user-ms repository is the microservice dedicated to handling
          everything regarding the users of your application. Just like the Api
          repository, this is a NestJS project written in Typescript. Instead of
          hosting Rest endpoint, it listens to the RabbitMQ message queue for
          messages. From the get go we have set it up to listen for a login
          message, with login credentials. When a login message is received it
          checks an in-memory database with users, to see if the credentials
          match. If the credentials match, a Json Web Token is generated and
          sent back through the RabbitMQ message queue. Using JWTs for
          authentication is a very popular and highly scalable method of
          implementing authentication - you can read a lot more about it on the
          <a href="https://jwt.io/" target="_blank">
            {' '}
            jwt.io{' '}
          </a>
          website.
        </p>
      </main>
    </>
  );
};

export default Docs;
