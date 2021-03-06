import React from "react"
import ".././index.css"

class CreateCampaignPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedQ1: null,
      option1Q2: null,
      option2Q2: null,
      option3Q2: null,
      recTextQ2: null,
      selectedQ2: null,
      campaign: null,
      budget: null
    }
  }
  componentDidMount() {
    document.addEventListener("keypress", event => {
      const keyName = event.key

      // alert('keypress event\n\n' + 'key: ' + keyName);
      if (window.scrollY < 150) {
        this.select1(keyName)
      }

      if (window.scrollY > 400) {
        this.select2(keyName)
      }

      this.handleSubmit2(keyName)
    })
  }

  render() {
    return (
      <div className="questionsContainer">
        <div className="sticky" />
        {/* first question */}
        <div >
          <h1>What kind of users do you want to target?</h1>
          <h4>💡 Tip. Unless you have really specific needs, alternative C gives you the best reach and performance</h4>
          <div className="boxContainer">
            <div className={this.state.selectedQ1 === "A" ? 'question1BoxSelected': 'question1Box'} onClick={e => this.select1("A")}>
              <h3>New customers</h3>
              <h5>Target users that are likely to become new customers. This is called a prospecting campaign.</h5>
              {/* checkbox */}
              <div className="checkedBox">
                <h5 className="checked" >{this.state.selectedQ1 === "A" ? "✓" : "press" }</h5>
                <span className={this.state.selectedQ1 === "A" ? 'coolboxSelected': 'coolbox'}>A</span>
              </div>
            </div>
            <div className={this.state.selectedQ1 === "B" ? 'question1BoxSelected': 'question1Box'} onClick={e => this.select1("B")}>
              <h3>Current website visitors</h3>
              <h5>Users that visited your website but left without buying. This is called a retargeting campaign.</h5>
              {/* checkbox */}
              <div className="checkedBox">
                <h5 className="checked" >{this.state.selectedQ1 === "B" ? "✓" : "press" }</h5>
                <span className={this.state.selectedQ1 === "B" ? 'coolboxSelected': 'coolbox'}>B</span>
              </div>
            </div>
            <div className={this.state.selectedQ1 === "C" ? 'question1BoxSelected': 'question1Box'} onClick={e => this.select1("C")}>
              <h3>New customers & Current website visitors</h3>
              <h5>Use a combination of Prospecting and Retargeting to reach new users as well as current visitors.
              </h5>
              {/* checkbox */}
              <div className="checkedBox">
                <h5 className="checked" >{this.state.selectedQ1 === "C" ? "✓" : "press" }</h5>
                <span className={this.state.selectedQ1 === "C" ? 'coolboxSelected': 'coolbox'}>C</span>
              </div>
            </div>
          </div>
        </div>

        {/* second question */}
        {this.state.selectedQ1 === null ? null : (
          <div className="question2Container" >
            <h1>How much daily budget do you want to use?</h1>
            <h4>{this.state.recTextQ2}</h4>
            <div className={this.state.selectedQ2 === "A" ? 'question2BoxSelected': 'question2Box'} onClick={e => this.select2("A")}>
              <h4>{this.state.option1Q2}</h4>
              {/* checkbox */}
              <div className="checkedBox">
                <h5 className="checked" >{this.state.selectedQ2 === "A" ? "✓" : "press" }</h5>
                <span className={this.state.selectedQ2 === "A" ? 'coolboxSelected': 'coolbox'}>A</span>
              </div>
            </div>
            <div className={this.state.selectedQ2 === "B" ? 'question2BoxSelected': 'question2Box'} onClick={e => this.select2("B")}>
              <h4>{this.state.option2Q2}</h4>
              {/* checkbox */}
              <div className="checkedBox">
                <h5 className="checked" >{this.state.selectedQ2 === "B" ? "✓" : "press" }</h5>
                <span className={this.state.selectedQ2 === "B" ? 'coolboxSelected': 'coolbox'}>B</span>
              </div>
            </div>
            <div className={this.state.selectedQ2 === "C" ? 'question2BoxSelected': 'question2Box'} onClick={e => this.select2("C")}>
              <h4>{this.state.option3Q2}</h4>
              {/* checkbox */}
              <div className="checkedBox">
                <h5 className="checked" >{this.state.selectedQ2 === "C" ? "✓" : "press" }</h5>
                <span className={this.state.selectedQ2 === "C" ? 'coolboxSelected': 'coolbox'}>C</span>
              </div>
            </div>
          </div>
        )}

        {/* Submission */}
        {this.state.selectedQ2 === null ? null : (
          <div>
            <hr />
            <div className="buttonContainer2">
              <button className="startButton" onClick={this.handleSubmit} type="submit">Continue to summery</button>
              <p>press ENTER </p>
            </div>
          </div>
        )}
        <div className="stickyBottom" />
      </div>
    )
  }

  select1 = value => {
    const letter = value.toUpperCase()
    if (letter === "A") {
      this.setState({
        selectedQ1: letter,
        option1Q2: "$30",
        option2Q2: "$50",
        option3Q2: "$75",
        recTextQ2: "💡Recommendation. For a prospecting campaign, we recommend a minimum of $30",
        campaign: "New customers"
      })
    } else if (letter === "B") {
      this.setState({
        selectedQ1: letter,
        option1Q2: "$15",
        option2Q2: "$30",
        option3Q2: "$50",
        recTextQ2: "💡Recommendation. For a retargeting campaign, we recommend a minimum of $15",
        campaign: "Current website visitors"
      })
    } else if (letter === "C") {
      this.setState({
        selectedQ1: letter,
        option1Q2: "$50",
        option2Q2: "$75",
        option3Q2: "$100",
        recTextQ2: "💡Recommendation. For a combination campaign, we recommend a minimum of $50",
        campaign: "New customers & Current website visitors"
      })
    }
    if (letter === "A" || letter === "B" || letter === "C") {
      window.scrollTo(0, 450)
    }
  }

  select2 = value => {
    const letter = value.toUpperCase()
    if (this.state.selectedQ1) {
      if (letter === "A") {
        this.setState({
          selectedQ2: letter,
          budget: this.state.option1Q2
        })
      } else if (letter === "B") {
        this.setState({
          selectedQ2: letter,
          budget: this.state.option2Q2
        })
      } else if (letter === "C") {
        this.setState({
          selectedQ2: letter,
          budget: this.state.option3Q2
        })
      }
    }

    if (letter === "A" || letter === "B" || letter === "C") {
      window.scrollTo(0, 1000)
    }
  }

  handleSubmit= event => {
    event.preventDefault()
    this.props.setBudget(this.state.budget, this.state.campaign)
    this.props.history.push("/Summary")
  }

  handleSubmit2 = keyName => {
    if (this.state.selectedQ1 && this.state.selectedQ2) {
      if (keyName === "Enter") {
        this.props.setBudget(this.state.budget, this.state.campaign)
        this.props.history.push("/Summary")
      }
    }
  }

}

export default CreateCampaignPage
