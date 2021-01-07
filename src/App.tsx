import React, { useState } from 'react';
import Select from 'react-select';
import Fretboard, { scaleNotes } from 'react-fretboard';
import CheckBox from 'react-animated-checkbox';
import styled from 'styled-components';

const Main = styled.main`
	background-image: url(static/images/cool-background.png);
	background-size: cover;
	background-repeat: no-repeat;
	display: grid;
	grid-gap: 1rem;
	grid-template-areas:
		'header header'
		'neck neck'
		'settings info';
`;

const Header = styled.div`
	grid-area: header;
	text-align: center;
	padding: 2rem;
`;

const Title = styled.span`
	border-radius: 2rem;
	padding: 1rem;
	font-size: 3rem;
	color: magenta;
	background-color: #fff;
	opacity: 0.5;
`;

const Neck = styled.div`
	grid-area: neck;
	margin: 0 2rem;
	padding: 2rem;
	background-color: #fff;
	opacity: 0.8;
	border-radius: 0.25rem;
`;

const Settings = styled.div`
	grid-area: settings;
	padding: 2rem;
	margin: 2rem 0 3rem 2rem;
	background-color: #fff;
	opacity: 0.8;
	border-radius: 0.25rem;
`;

const Info = styled.div`
	grid-area: info;
	padding: 2rem;
	margin: 2rem 2rem 3rem 0;
	background-color: #fff;
	opacity: 0.8;
	margin-top: 2rem;
	border-radius: 0.25rem;
`;

const Section = styled.div`
	margin-bottom: 2rem;
`;

const Label = styled.label`
	margin-left: 1rem;
`;

const ROOT_NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const TUNINGS = {
	STANDARD: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
	FOURTHS: ['E2', 'A2', 'D3', 'G3', 'C3', 'F4'],
};

function App() {
	const [rootNote, setRootNote] = useState();
	const [tuning, setTuning] = useState();
	const [showNotes, setShowNotes] = useState(true);
	const notes = rootNote ? scaleNotes(rootNote, 'major').map((n: any) => n.note) : [];

	function getRootNoteOptions() {
		return ROOT_NOTES.map(note => ({
			label: note,
			option: note,
		}));
	}

	function getTuningOptions() {
		return [
			{ option: TUNINGS.STANDARD, label: 'standard' },
			{ option: TUNINGS.FOURTHS, label: 'fourths' },
		];
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
			<Header>
				<Title>Neck Visualizer</Title>
			</Header>
			<Neck>
				<Fretboard
					skinType="strings"
					nrOfFrets={20}
					tuning={tuning}
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
				<Section>
					<label>Tuning</label>
					<Select
						value={tuning}
						placeholder="Select a tuning (standard tuning by default)"
						onChange={({ option }: any) => setTuning(option)}
						options={getTuningOptions()}
					/>
				</Section>
				<Section>
					<label>Root note</label>
					<Select
						value={rootNote}
						placeholder="Select a root note"
						onChange={({ option }: any) => setRootNote(option)}
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
			</Settings>
			<Info>{notes}</Info>
		</Main>
	);
}

export default App;
