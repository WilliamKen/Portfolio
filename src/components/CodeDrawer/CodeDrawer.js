import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Typography, Button } from '@mui/material';
import './CodeDrawer.css';

const codeSamples = [
  {
    title: 'Machine Learning',
    code: `rf = RandomForestRegressor(n_estimators=150, random_state=42)\nrf.fit(X_train, y_train)`,
    language: 'Python',
    explanation: 'Initializes and trains a RandomForest model to predict outcomes based on historical data.'
  },
  {
    title: 'Data Transformation',
    code: `temp_by_year = pd.melt(global_temp, id_vars=["Year"], value_name="Value")`,
    language: 'Python',
    explanation: 'This Python snippet reshapes a DataFrame, turning columns into rows to facilitate easier data analysis.'
  },
  {
    title: 'API Fetch',
    code: `fetch(\`https://www.dnd5eapi.co\${spellUrl}\`)\n  .then(response => response.json())\n  .then(data => console.log(data))`,
    language: 'JavaScript',
    explanation: 'Fetches spell details from a D&D API and inserts them into a database.'
  },
  {
    title: 'SQL Insert',
    code: `const sql = "INSERT INTO Spells (name, level) VALUES (?, ?)";`,
    language: 'JavaScript',
    explanation: 'Prepares an SQL statement to insert spell data into a database.'
  },
  {
    title: 'Generate HTML Elements',
    code: `function displaySpellSlots(slotsPerLevel) {
    const slotsContainer = document.querySelector('.spell-slots');
    slotsContainer.innerHTML = '';
    slotsPerLevel.forEach((slots, index) => {
        const level = index + 1;
        const levelSlotsContainer = document.createElement('div');
        levelSlotsContainer.className = 'level-slots';
        levelSlotsContainer.id = \`level-\${level}-slots\`;
        const levelTitle = document.createElement('h4');
        levelTitle.textContent = \`Level \${level} Slots:\`;
        levelSlotsContainer.appendChild(levelTitle);
        for (let i = 0; i < slots; i++) {
            const slot = document.createElement('span');
            slot.className = 'spell-slot';
            levelSlotsContainer.appendChild(slot);
        }
        slotsContainer.appendChild(levelSlotsContainer);
    });
}`,
    language: 'JavaScript',
    explanation: 'Dynamically generates HTML elements to display spell slots based on the slotsPerLevel array.'
  },
  {
    title: 'Check Logical Conditions',
    code: `function canCastSpell(level) {
    if (level === 0) {
        return true;
    }
    return slotsPerLevel[level - 1] > 0;
}`,
    language: 'JavaScript',
    explanation: 'Checks whether a spell of the specified level can be cast based on available slots.'
  },
  {
    title: 'Update State and UI',
    code: `function useAlterSlot() {
    if (alterSlots > 0) {
        alterSlots--;
        const unusedAlterSlot = document.querySelector('.alter-slot:not(.used)');
        if (unusedAlterSlot) {
            unusedAlterSlot.classList.add('used');
        }
        localStorage.setItem('alterSlots', alterSlots.toString());
    } else {
        alert("No more alter slots available.");
    }
}`,
    language: 'JavaScript',
    explanation: 'Marks an alter slot as used and updates the alterSlots variable and localStorage.'
  },
  {
    title: 'Reset State and UI',
    code: `function resetSpellAndAlterSlots() {
    slotsPerLevel = [4, 2];
    alterSlots = 5;
    localStorage.setItem('slotsPerLevel', JSON.stringify(slotsPerLevel));
    localStorage.setItem('alterSlots', alterSlots.toString());
    displaySpellSlots(slotsPerLevel);
    displayAlterSlots();
}`,
    language: 'JavaScript',
    explanation: 'Resets the spell and alter slots to their initial values and updates the display.'
  }
];

const CodeDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);

  const handleOpenDrawer = (code) => {
    setSelectedCode(code);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedCode(null);
  };

  // Split the code samples into two columns
  const firstColumnSamples = codeSamples.slice(0, Math.ceil(codeSamples.length / 2));
  const secondColumnSamples = codeSamples.slice(Math.ceil(codeSamples.length / 2));

  return (
    <div className="code-drawer-container">
      <div className="code-columns">
        <List className="code-column">
          {firstColumnSamples.map((sample, index) => (
            <ListItem button key={index} onClick={() => handleOpenDrawer(sample)}>
              <ListItemText primary={sample.title} />
            </ListItem>
          ))}
        </List>
        <List className="code-column">
          {secondColumnSamples.map((sample, index) => (
            <ListItem button key={index} onClick={() => handleOpenDrawer(sample)}>
              <ListItemText primary={sample.title} />
            </ListItem>
          ))}
        </List>
      </div>
      <Drawer anchor="bottom" open={drawerOpen} onClose={handleCloseDrawer}>
        <Box className="drawer-box">
          {selectedCode && (
            <>
              <Typography variant="h6" gutterBottom className="drawer-title">
                {selectedCode.title} ({selectedCode.language})
              </Typography>
              <pre className="code-content">{selectedCode.code}</pre>
              <Typography variant="body1" className="code-explanation">
                {selectedCode.explanation}
              </Typography>
              <Button variant="contained" onClick={handleCloseDrawer} className="close-button">
                Close
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </div>
  );
};

export default CodeDrawer;
