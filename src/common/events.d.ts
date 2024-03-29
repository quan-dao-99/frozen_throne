/**
 * This file contains types for the events you want to send between the UI (Panorama)
 * and the server (VScripts).
 *
 * IMPORTANT:
 *
 * The dota engine will change the type of event data slightly when it is sent, so on the
 * Panorama side your event handlers will have to handle NetworkedData<EventType>, changes are:
 *   - Booleans are turned to 0 | 1
 *   - Arrays are automatically translated to objects when sending them as event. You have
 *     to change them back into arrays yourself! See 'toArray()' in src/panorama/hud.ts
 */

// To declare an event for use, add it to this table with the type of its data
interface CustomNetTableDeclarations {
  quest_system: {
    setting: {
      name: string;
      count: number;
    };
  };
  players: {
    selectedHeroes: PlayerSetting;
    votes: Votes;
  };
}

type PlayerSetting = Record<PlayerID, string>;

type Votes = {
  playerUnderVote: PlayerID | undefined;
  votedForPlayers: VotedPlayers;
  votedAgainstPlayers: VotedPlayers;
};

type VotedPlayers = {
  [key: number]: PlayerID;
};

interface CustomGameEventDeclarations {
  example_event: ExampleEventData;
  ui_panel_closed: UIPanelClosedEventData;
  round_time_updated: RoundTimeUpdatedEventData;
  start_player_vote: StartPlayerVoteData;
  submit_vote_option: SubmitVoteOptionData;
  end_vote: EndVoteData
}

interface RoundTimeUpdatedEventData {
  maxRoundTimer: number;
  currentRoundTimer: number;
}

interface StartPlayerVoteData {
  playerUnderVote: PlayerID;
}

type VoteChoice = "for" | "against";

interface SubmitVoteOptionData {
  vote: VoteChoice;
}

interface EndVoteData {}

// Define the type of data sent by the example_event event
interface ExampleEventData {
  myNumber: number;
  myBoolean: boolean;
  myString: string;
  myArrayOfNumbers: number[];
}

// This event has no data
interface UIPanelClosedEventData {}
