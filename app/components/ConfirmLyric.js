import React, {Component} from 'react'

function puke (obj) {
	return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmLyric (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <p> CONFIRM LYRIC!: {puke(props)}</p>
}

export default ConfirmLyric