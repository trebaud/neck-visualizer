import React, { useState } from 'react';
import Select from 'react-select';
import Fretboard, { scaleNotes } from 'react-fretboard';
import styled from 'styled-components';

const Main = styled.main`
	margin-top: 8rem;
	margin-right: 4rem;
`;

const Settings = styled.div`
	padding: 4rem;
`;

const Row = styled.div`
	display: flex;
`;

const Col = styled.div`
	flex: 50%;
	padding: 1rem;
	height: 16rem;
`;

const ROOT_NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

function App() {
	const [rootNote, setRootNote] = useState();

	function getRootNoteOptions() {
		return ROOT_NOTES.map(note => ({
			label: note,
			option: note,
		}));
	}

	function getNeckNotes() {
		const notes = scaleNotes(rootNote, 'major').map((n: any) => n.note);
		return [
			{ note: notes[0], status: 'root' },
			{ note: notes[2], status: '3M' },
			{ note: notes[4], status: '5P' },
			{ note: notes[6], status: '7M' },
		];
	}

	return (
		<Main>
			<Fretboard
				skinType="strings"
				nrOfFrets={20}
				showNotes
				selectedNotes={getNeckNotes()}
				theme={{
					statusMap: {
						'7M': '#b9e59e',
						root: '#2196f3',
						'3M': '#6ec6ff',
						'5P': '#9a67ea',
					},
				}}
			/>
			<Settings>
				<Row>
					<Col style={{ backgroundColor: '#ede7f6' }}>
						<Select
							value={rootNote}
							onChange={(option: any) => setRootNote(option.option)}
							options={getRootNoteOptions()}
						/>
					</Col>
					<Col style={{ backgroundColor: '#f7fcff' }}></Col>
				</Row>
			</Settings>
		</Main>
	);
}

export default App;
