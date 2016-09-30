import React, {Component} from 'react'

function ConfirmLyric (props) {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <p> CONFIRM LYRIC! </p>
}

export default ConfirmLyric