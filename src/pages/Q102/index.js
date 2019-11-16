import React from 'react'
import socketIOClient from "socket.io-client";

import Layout from 'components/Layout'
import questions from './questions'
import './Q10.css'

// Connect Socket.io
const server = `${process.env.REACT_APP_SERVER}`
const socket = socketIOClient(server)

// Initial State
const initial = {
  max: 10,
  timer: 20,
  players: [],
  player: {},
  scene: 2,
  question: 1,
  join: false
}

class Q10 extends React.Component {
  state = initial

  reset () {
    this.setState(initial)
  }

  play () {
    socket.emit('update scene', 3)
    socket.emit('countdown', 20)
  }

  handleChangeName (name) {
    this.setState({ player: { name }})
  }

  addPlayer () {
    const player = { ...this.state.player, score: 0 }

    socket.emit('add player', player, this.state.scene)
    this.setState({ join: true })
  }

  removePlayer () {
    const { player, scene } = this.state

    socket.emit('remove player', player.name, scene)
    this.reset()
  }

  render() {
    const { players, player, join, scene, question } = this.state
    const split = 2
    const list = players.length > 0
    var hasPlayer = player && player.name

    hasPlayer && socket.on('update players', (data) => {
      this.setState({ players: data })
    })

    hasPlayer && socket.on('update scene', (data) => {
      this.setState({ scene: data })
    })

    var firstCol = players.slice(0, split)
    var secondCol = players.slice(split)

    console.log(this.state)

    return (
      <Layout>
        <h1>Q10</h1>

        <div className="frame">
          {!join && this.inputName(player)}
          {(join && list) && this.playerList(firstCol, secondCol)}
          {scene === 3 && this.question(question)}
        </div>
      </Layout>
    )
  }

  inputName (player) {
    const { players, max } = this.state

    if (players.length === max) {
      return <h4>ห้องเต็ม หรือเกมได้เริ่มไปแล้ว กรุณารอรอบถัดไป!</h4>
    }
    else {
      return (
        <div className="input-name">
          <h3>Input Name</h3>

          <input type="text"
            name='name'
            value={player.name}
            onChange={(e) => this.handleChangeName(e.target.value)}
          />

          <button onClick={() => this.addPlayer()}>Continue</button>
        </div>
      )
    }
  }

  playerList (firstCol, secondCol) {
    const { players, player, scene } = this.state

    return (
      <div className="list">
        <h3>Waiting for Players <span>[Max 10 players]</span></h3>

        <div className="columns">
          <div className="column">
            <ul>
              {
                firstCol.map((player, i) => {
                  const me = player.name === this.state.player.name
                  const head = i === 0

                  return (
                    <li key={i}>
                      {player.name} {me && <span>[me]</span>} {head && <span>Head</span>}
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="column">
            <ul>
              {
                secondCol.map((player, i) => {
                  return (
                    <li key={i}>{player.name}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        {scene === 2 && (
          <div className="actions">
            <button onClick={() => this.removePlayer()}>Back</button>
            {
              players.length > 1 &&
              players.findIndex(p => p.name === player.name) === 0 && (
                <button onClick={() => this.play()}>Play</button>
              )
            }
          </div>
        )}
      </div>
    )
  }

  question (questionNo) {
    const item = questions.find(q => q.id === questionNo) || {}
    const choices = item.choices || []

    socket.on('countdown', (timer) => {
      this.setState(({ timer }) => ({
        timer: timer
      }))
    })

    socket.on('update question', (question) => {
      this.setState(({ question }) => ({
        question: question
      }))
    })

    return (
      <div className="question">
        <h4>{item.question}</h4>

        {
          choices.map((choice, i) => {
            return (
              <p key={i}>{choice}</p>
            )
          })
        }

        <div className="countdown">
          <p>{this.state.timer}</p>
        </div>
      </div>
    )
  }
}

export default Q10
