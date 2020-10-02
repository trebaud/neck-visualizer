import React, { useState } from 'react';
import Select from 'react-select';
import Fretboard, { scaleNotes } from 'react-fretboard';
import CheckBox from 'react-animated-checkbox';
import styled from 'styled-components';

const Main = styled.main`
	margin: 8rem 2rem 0 2rem;
`;

const Neck = styled.div`
	padding: 2rem;
	background-color: #fff;
	border-radius: 2rem;
`;

const Settings = styled.div`
	padding: 2rem;
	background-color: #fff;
	margin-top: 2rem;
	border-radius: 2rem;
`;

const Section = styled.div`
	margin-bottom: 1rem;
`;

const Row = styled.div`
	display: flex;
`;

const Col = styled.div`
	flex: 50%;
	padding: 1rem;
	height: 16rem;
`;

const Label = styled.label`
	margin-left: 1rem;
`;

const ROOT_NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

function App() {
	const [rootNote, setRootNote] = useState();
	const [showNotes, setShowNotes] = useState(true);
	const notes = rootNote ? scaleNotes(rootNote, 'major').map((n: any) => n.note) : [];

	function getRootNoteOptions() {
		return ROOT_NOTES.map(note => ({
			label: note,
			option: note,
		}));
	}

	function getNeckNotes() {
		return [
			{ note: notes[0], status: 'root' },
			{ note: notes[2], status: '3M' },
			{ note: notes[4], status: '5P' },
			{ note: notes[6], status: '7M' },
		];
	}

	return (
		<Main>
			<Neck>
				<Fretboard
					skinType="strings"
					nrOfFrets={20}
					showNotes={showNotes}
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
			</Neck>
			<Settings>
				<Row>
					<Col>
						<Section>
							<Select
								value={rootNote}
								onChange={(option: any) => setRootNote(option.option)}
								options={getRootNoteOptions()}
							/>
						</Section>
						<Section>
							<CheckBox
								checked={showNotes}
								checkBoxStyle={{
									checkedColor: '#b5cbbb',
									size: 25,
									unCheckedColor: '#b8b8b8',
								}}
								duration={400}
								onClick={() => setShowNotes(!showNotes)}
							/>
							<Label>Show all notes</Label>
						</Section>
					</Col>
					<Col>{notes}</Col>
				</Row>
			</Settings>
		</Main>
	);
}

export default App;
