export const GET_ALL_SECTIONS = `
   *[_type == "section"] {
        ...,
        restaurants[] -> {
            ...,
            dishes[] ->,
            type -> {
              title,
              _id
            }
        }
    }
`