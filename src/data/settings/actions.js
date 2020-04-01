import fs from '../../firebase/firebase'

export const setWorkDuration = (duration) => ({
  type: 'SET_WORK_DURATION',
  duration,
})

export const startSetWorkDuration = (duration) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    await fs
      .doc(`users/${uid}`)
      .set({ settings: { workDuration: duration } }, { merge: true })

    dispatch(setWorkDuration(duration))
  }
}

export const setShortBreakDuration = (duration) => ({
  type: 'SET_SHORT_BREAK_DURATION',
  duration,
})

export const startSetShortBreakDuration = (duration) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    await fs
      .doc(`users/${uid}`)
      .set({ settings: { shortBreakDuration: duration } }, { merge: true })

    dispatch(setShortBreakDuration(duration))
  }
}

export const setLongBreakDuration = (duration) => ({
  type: 'SET_LONG_BREAK_DURATION',
  duration,
})

export const startSetLongBreakDuration = (duration) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    await fs
      .doc(`users/${uid}`)
      .set({ settings: { longBreakDuration: duration } }, { merge: true })

    dispatch(setLongBreakDuration(duration))
  }
}

export const setRounds = (rounds) => ({
  type: 'SET_ROUNDS',
  rounds,
})

export const startSetRounds = (rounds) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    await fs.doc(`users/${uid}`).set({ settings: { rounds } }, { merge: true })

    dispatch(setRounds(rounds))
  }
}

export const setShowTimerInTitle = (showTimerInTitle) => ({
  type: 'SET_SHOW_TIMER_IN_TITLE',
  showTimerInTitle,
})

export const startSetShowTimerInTitle = (showTimerInTitle) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    await fs
      .doc(`users/${uid}`)
      .set({ settings: { showTimerInTitle } }, { merge: true })

    dispatch(setShowTimerInTitle(showTimerInTitle))
  }
}

export const setShowNotifications = (showNotifications) => ({
  type: 'SET_SHOW_NOTIFICATIONS',
  showNotifications,
})

export const startSetShowNotifications = (showNotifications) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    await fs
      .doc(`users/${uid}`)
      .set({ settings: { showNotifications } }, { merge: true })

    dispatch(setShowNotifications(showNotifications))
  }
}

export const setDarkMode = (darkMode) => ({
  type: 'SET_DARK_MODE',
  darkMode,
})

export const startSetDarkMode = (darkMode) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    localStorage.setItem('darkMode', darkMode)

    await fs
      .doc(`users/${uid}`)
      .set({ settings: { darkMode } }, { merge: true })

    dispatch(setDarkMode(darkMode))
  }
}

export const setSettings = (settings) => ({
  type: 'SET_SETTINGS',
  settings,
})

export const startSetSettings = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid

    const docRef = await fs.doc(`users/${uid}`).get()
    let data

    if (docRef.exists) {
      data = docRef.data().settings
    }

    dispatch(setSettings(data))
  }
}
