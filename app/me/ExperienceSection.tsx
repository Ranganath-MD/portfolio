const style = {
  listStyle: "mb-10 ml-4",
  dot: "absolute w-4 h-4 bg-prime rounded-full mt-1.5 -left-2 border dark:bg-prime",
  title: "text-lg font-semibold text-gray-900 dark:text-white",
  desc: "mb-4 text-base font-normal text-gray-700 dark:text-gray-400 bg-slate-100 dark:bg-slate-900 p-6 mt-4 rounded",
  org: "mb-1 text-sm font-semibold leading-none text-prime dark:text-prime"
}

export const Experience = () => {
  return (
    <section className="mt-12">
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      <ol className="relative border-l border-gray-700 dark:border-gray-700">
        <li className={style.listStyle}>
          <div className={style.dot}></div>
          <span className={style.org}>@ Publicis Sapient</span>
          <h3 className={style.title}>Senior Associate Experience Engineer, L1</h3>
          <p className={style.desc}>
            Working with client for their conference web application.
            I create responsive, accessible, and performant user interfaces. Responsible for implementing complex UI components and interactions and optimize front-end performance and loading times.
            I Work closely with UX designers to implement designs accurately and efficiently and ensure the UI works consistently across various browsers and devices, addressing any compatibility issues.
          </p>
        </li>
        <li className={style.listStyle}>
          <div className={style.dot}></div>
          <span className={style.org}>@ iQGateway</span>
          <h3 className={style.title}>Senior Software Developer</h3>
          <p className={style.desc}>
            I led a team focused on creating frontend solutions for data science applications.
            We tackled data-intensive projects, with a special emphasis on healthcare and data science applications.
            Our primary task was building applications using technologies like React, Typescript, MobX, and more.
            I played a role in fostering effective teamwork and communication, collaborating daily with a diverse group of professionals, including data scientists, business analysts, and developers.
          </p>
        </li>
        <li className={style.listStyle}>
          <div className={style.dot}></div>
          <span className={style.org}>@ mVerve</span>
          <h3 className={style.title}>Software Engineer</h3>
          <p className={style.desc}>
            I created and kept up the code for client websites, mainly using HTML, CSS, Sass, JavaScript, and React.js.
            I also used various tools like JavaScript, Gatsby, React, Redux, Strapi, Ext-React, React-Native, and Netlify. Every day,
            I talked with teams of different experts like engineers, designers and clients.
            I even built a hybrid app using React with some extra features from Extjs.
          </p>
        </li>
        <li className={style.listStyle}>
          <div className={style.dot}></div>
          <span className={style.org}>@ Molecular Connections</span>
          <h3 className={style.title}>Scientific Data Analyst</h3>
          <p className={style.desc}>
            Worked with a client to provide high-quality data-driven solutions to clients in the life sciences and healthcare sectors.
            Used natural language processing and text mining techniques to extract valuable information from scientific texts, patents, or other textual data.
            Ensuring data quality and maintaining high standards of scientific integrity
          </p>
        </li>
      </ol>

    </section>

  )
}