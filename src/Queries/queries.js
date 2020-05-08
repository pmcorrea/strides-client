import { gql } from 'apollo-boost'

const getBooksAndAuthors = gql`
	{
		books{
			name
			id
		},

		authors{
			name
			id
		}
	}

`

const addBook = gql`
	mutation($name: String!, $genre: String!, $authorId: ID!) {
  		addBook(name: $name, genre: $genre, authorId: $authorId ) {
			name
			genre
			id
  		}
	}
`

export {
	getBooksAndAuthors, addBook
}