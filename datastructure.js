{

  users: {
    b38bd6fe: {
      name: 'chris',
      games: {
        a0d00286: true
      }
    },
    eef94332: {
      name: 'james',
      games: {
        a0d00286: true
      }
    }
  },

  games: {
    a0d00286: {

      name: 'RANDO_BOT_3000',
      owner: 'b38bd6fe',

      players: {
        b38bd6fe: {
          name: 'chris',
          skips: 3,
          turn: true,
          answered: 0,
          asked: 0,
          skipped: 0
        }
      },

      currentQuestion: {
        askedBy: {id: 'b38bd6fe', name: 'chris'},
        answeredBy: {id: 'eef94332', name: 'james'},
        questionId: 'f7b2c85f-85ce-4dcf-b261-2e7b1c850621',
        question: 'Be in the movie of your choice, what movie would you choose and what character would you play?'
      },

      questionsAsked: {
        '9E3CD9AD-098B-47E3-9DD4-5E2CFE6C847B': {askedBy: {id: 'b38bd6fe', name: 'chris'}, answeredBy: {id: 'eef94332', name: 'james'}}
      }

      questionsSkipped: {
        '9E2CF73A-3F6D-44E0-A103-CD54768E0191': { skippedBy: {id: 'eef94332', name: 'james'}, askedBy: {id: 'b38bd6fe', name: 'chris'} }
      },


      messages: {

        a770d5e8: {
          timestamp: moment().tz('MYTIMEZONE'),
          questionId: 'f7b2c85f-85ce-4dcf-b261-2e7b1c850621',
          question: 'Be in the movie of your choice, what movie would you choose and what character would you play?',
          author: {id: 'b38bd6fe', name: 'chris'},
          text: ''
        }

      }
    }
  }
}

