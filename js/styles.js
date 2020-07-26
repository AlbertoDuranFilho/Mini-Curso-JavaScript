      const style = `
      <style>
      
      :root{
          --line-height: 10px;
          --happy-color: #EAB543; 
      }

      *{
            margin: 0;
            padding: 0;
            border: none;
        }
        body{
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            background-color: #2c3a47;
        }

        #root{
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            font-family: 'Press Start 2p', cursive;
            background-color: #3b3b98;
            width: 40vw;
            min-width: 768px;
            height: 30vw;
            text-align: center;
            padding-top: 4rem;
            padding-bottom: 7rem;
           
        }

        </style>
        `

        const head = document.querySelector("head")

        head.insertAdjacentHTML("beforeend", style)