import { IconX } from '@tabler/icons'
import React from 'react'

export default function TagItem({title, deleteTag}) {
	return (
		<div className=' d-flex align-items-center bg-blue-lt p-1 rounded'>
			<span className='me-2'>{title}</span>
			<IconX className="cursor-pointer me-1" size="20" strokeWidth="1.5" onClick={deleteTag} />
		</div>
	)
}
