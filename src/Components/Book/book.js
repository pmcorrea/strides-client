import React, { useState } from 'react';
import { Route, Link, Redirect, useRouteMatch } from "react-router-dom";

import { graphql } from 'react-apollo'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { getBooksAndAuthors, addBook } from '../../Queries/queries'

import "./book.css"

export default function Book() {
	const { loading, data } = useQuery(getBooksAndAuthors);
	const [addSomeBook] = useMutation(addBook)
	const [ bookTitle, setBookTitle ] = useState('');
	const [selectedAuthor, setAuthor] = useState();
	const [genre, setGenre] = useState();

	function handleSubmit(e) {
		e.preventDefault()
		console.log(bookTitle)
		console.log(selectedAuthor)
		console.log(genre)
		addSomeBook({ variables: { name: bookTitle, genre: genre, authorId: selectedAuthor}})

	}

	return (
		
			<div className="settings-container">

				<h2>
					General
				</h2>
				
				{loading 
				? <p>Loading</p> 
				: data.books.map(book => {
					return (
					<div key={book.id}>
						<p>{book.name}</p>
						<p>{book.id}</p>
					</div>
					)
				})}

			{loading
				? <p>Loading</p>
				: data.authors.map(author => {
					return (
						<div key={author.id}>
							<p>{author.name}</p>
							<p>{author.id}</p>
						</div>
					)
				})}

				<h2>Author</h2>

			<form onSubmit={(e) => handleSubmit(e)}>
				<select onChange={(e) => setAuthor(e.target.value)}>
					<option>Select Author</option>
				{loading
					? <p>Loading</p>
					: data.authors.map(author => {
						return (
							<option value={author.id} key={author.id}>{author.name}</option>
						)
					})}
				</select>
				<input onChange={(e) => setBookTitle(e.target.value)} />
				<input onChange={(e) => setGenre(e.target.value)} />
				<button type='submit'>Submit</button>
			</form>	
		</div>
			
		
	);
}