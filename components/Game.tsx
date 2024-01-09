import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { Colors } from '../styles/Colors'
import Header from './Header'
import { Coordinate, Direction, GestureEventType } from '../types/types'
import Snake from './Snake'
import { checkGameOver } from '../utils/checkGameOver'
import Food from './Food'
import { checkEatsFood } from '../utils/checkEatsFood'
import { randomFoodPosition } from '../utils/randomFoodPosition'

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 20, y: 20 };;
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

export default function Game(): JSX.Element {
  const [direction, setdirection] = useState<Direction>(Direction.Right);
  const [snake, setsnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION)
  const [food, setfood] = useState<Coordinate>(FOOD_INITIAL_POSITION)
  const [isGameOver, setisGameOver] = useState<boolean>(false)
  const [isPaused, setisPaused] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)



  useEffect(() => {
    if (!isGameOver) {
      const intervalID = setInterval(() => {
        !isPaused && moveSnake();
      }, MOVE_INTERVAL);
      return () => clearInterval(intervalID)
    }
  }, [isGameOver, snake, isPaused]);

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newHead = { ...snakeHead };

    // game over
    if (checkGameOver(snakeHead, GAME_BOUNDS)){
      setisGameOver((prev) => !prev);
      return;     
    }

    switch (direction) {
      case Direction.Up:
        newHead.y -= 1;
        break;
      case Direction.Down:
        newHead.y += 1;
        break;
      case Direction.Left:
        newHead.x -= 1;
        break;
      case Direction.Right:
        newHead.x += 1;
        break;
      default:
        break;
    }

    // check eats food
    if (checkEatsFood(newHead, food, 2)){
      setfood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
      setsnake([newHead, ...snake]);
      setScore(score + SCORE_INCREMENT)
    } else {
    setsnake([newHead, ...snake.slice(0, -1)])
    
    }
  };

  const handleGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;

    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        setdirection(Direction.Right);
      } else {
        setdirection(Direction.Left);
      }
    } else {
      if (translationY > 0) {
        setdirection(Direction.Down);
      } else {
        setdirection(Direction.Up)
      }
    }
  };

  const reloadGame = () => {
    setsnake(SNAKE_INITIAL_POSITION);
    setfood(FOOD_INITIAL_POSITION);
    setisGameOver(false);
    setScore(0);
    setdirection(Direction.Right);
    setisPaused(false)
  }

  const pauseGame = () =>{
    setisPaused(!isPaused);
  }

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={styles.container}>
        <Header
        reloadGame={reloadGame}
        isPaused={isPaused}
        pauseGame={pauseGame}
        >
          <Text style={{fontSize: 22, fontWeight: "bold"}}>{score}</Text>
        </Header>
        <View style={styles.boundaries}>
          <Snake snake={snake}/>
          <Food x={food.x} y={food.y}/>
        </View>
      </SafeAreaView>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  boundaries: {
    flex: 1,
    borderWidth: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: Colors.primary,
    backgroundColor: Colors.background

  },

})