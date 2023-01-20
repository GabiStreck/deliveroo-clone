export const GET_BY_TITLE = `
{
	'restaurants': *[_type == "restaurant" && title match $title + "*"] {
        ...,
        dishes[] ->,
        type -> {
            title,
            _id
        }
    },
    'dishes': *[_type == "dish" && title match $title + "*"] {
        ...,
    }
}
`

export const GET_BY_TITLE_AND_CATEGORY = `
{
	'restaurants': *[_type == "restaurant" && title match $title + "*" && $category == type -> title] {
        ...,
        dishes[] ->,
        type -> {
            title,
            _id
        }
    },
    'dishes': *[_type == "dish" && title match $title + "*"] {
        ...,
    }
}
`

export const GET_BY_CATEGORY = ` 
    {
        'restaurants': *[_type == "restaurant" && $title == type -> title]  {
           ...,
            dishes[] ->,
            type -> {
                title,
                _id
            }
        }
    }
`