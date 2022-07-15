import React, { useState } from 'react'
import Input from './input'
import TagItem from './tagItem'

let n = 0;

export default function TagInput() {
	const [tagsList, setTagsList] = useState([])
	const [tag, setTag] = useState("")

	return (
		<div className='d-flex flex-column'>
			<Input
				value={tag}
				onChange={(e) => setTag(e.target.value)}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						setTagsList([...tagsList, { id: n, value: tag }])
						n++;
						setTag("")
					}
				}}
				placeholder='Add tags (Enter to add)'
			/>
			{tagsList.length <= 0 ?
				<span className="text-muted mt-2">Note: If not tags added the all contacts will be added.</span>
				:
				<ul className='d-flex flex-wrap gap-2 list-unstyled mt-2'>
					{tagsList.map((item) =>
						<li key={item.id}>
							<TagItem title={item.value} deleteTag={() => setTagsList(tagsList.filter(i => i.id !== item.id))} />
						</li>
					)}
				</ul>
			}
		</div>
	)
}
