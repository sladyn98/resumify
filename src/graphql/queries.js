/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
      id
      basics {
        name
        label
        email
        phone
        website
        summary
        location {
          address
          city
          region
          postalCode
          countryCode
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
        courses
      }
      volunteer {
        organization
        position
        website
        startDate
        endDate
        summary
        highlights
      }
      languages {
        language
        fluency
      }
      skills {
        name
        level
        keywords
      }
      awards {
        title
        date
        awarder
        summary
      }
      publications {
        name
        publisher
        website
        releaseDate
        summary
      }
      references {
        name
        reference
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        basics {
          name
          label
          email
          phone
          website
          summary
        }
        work {
          company
          position
          website
          startDate
          endDate
          summary
          highlights
        }
        education {
          institution
          area
          studyType
          startDate
          endDate
          gpa
          courses
        }
        volunteer {
          organization
          position
          website
          startDate
          endDate
          summary
          highlights
        }
        languages {
          language
          fluency
        }
        skills {
          name
          level
          keywords
        }
        awards {
          title
          date
          awarder
          summary
        }
        publications {
          name
          publisher
          website
          releaseDate
          summary
        }
        references {
          name
          reference
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
