export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e55082e16ba3c4eea4f6408',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eiqbqqx8',
                  apiId: 'b8e3af64-dea1-40e7-bcbc-06b53e3efa67'
                },
                {
                  buildHookId: '5e55082f993a43927f7c53b8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mvpi8zqk',
                  apiId: 'cc6a0cc1-8065-41bd-9f92-fa215919e7b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AubreyHewes/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mvpi8zqk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
