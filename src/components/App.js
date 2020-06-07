import React, { Component } from "react";
import Cell from './cell.js';
import Timer from './timer.js';

import '../scss/style.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
      		startingTime: 600,
      		blockDisplay: 'block',
      		countFirstPlayer: 12,
      		countSecondPlayer: 12,
			queenStep: false,
			queenStartedFrom: false,
			queenEated: [],
			queenEatedAfterEating: [],
			firstStep: true,
			stepOfFirstPlayer: true,
     		notQueenStartedFrom: false,
			cells: [
				{id: 0, active: false, filled: false, shape: false, queen: false},
				{id: 1, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 2, active: false, filled: false, shape: false, queen: false},
				{id: 3, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 4, active: false, filled: false, shape: false, queen: false},
				{id: 5, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 6, active: false, filled: false, shape: false, queen: false},
				{id: 7, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 8, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 9, active: false, filled: false, shape: false, queen: false},
				{id: 10, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 11, active: false, filled: false, shape: false, queen: false},
				{id: 12, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 13, active: false, filled: false, shape: false, queen: false},
				{id: 14, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 15, active: false, filled: false, shape: false, queen: false},
				{id: 16, active: false, filled: false, shape: false, queen: false},
				{id: 17, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 18, active: false, filled: false, shape: false, queen: false},
				{id: 19, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 20, active: false, filled: false, shape: false, queen: false},
				{id: 21, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 22, active: false, filled: false, shape: false, queen: false},
				{id: 23, active: true, filled: 'firstPlayer', shape: false, queen: false},
				{id: 24, active: true, filled: false, shape: false, queen: false},
				{id: 25, active: false, filled: false, shape: false, queen: false},
				{id: 26, active: true, filled: false, shape: false, queen: false},
				{id: 27, active: false, filled: false, shape: false, queen: false},
				{id: 28, active: true, filled: false, shape: false, queen: false},
				{id: 29, active: false, filled: false, shape: false, queen: false},
				{id: 30, active: true, filled: false, shape: false, queen: false},
				{id: 31, active: false, filled: false, shape: false, queen: false},
				{id: 32, active: false, filled: false, shape: false, queen: false},
				{id: 33, active: true, filled: false, shape: false, queen: false},
				{id: 34, active: false, filled: false, shape: false, queen: false},
				{id: 35, active: true, filled: false, shape: false, queen: false},
				{id: 36, active: false, filled: false, shape: false, queen: false},
				{id: 37, active: true, filled: false, shape: false, queen: false},
				{id: 38, active: false, filled: false, shape: false, queen: false},
				{id: 39, active: true, filled: false, shape: false, queen: false},
				{id: 40, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 41, active: false, filled: false, shape: false, queen: false},
				{id: 42, active: true, filled:'secondPlayer', shape: false, queen: false},
				{id: 43, active: false, filled: false, shape: false, queen: false},
				{id: 44, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 45, active: false, filled: false, shape: false, queen: false},
				{id: 46, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 47, active: false, filled: false, shape: false, queen: false},
				{id: 48, active: false, filled: false, shape: false, queen: false},
				{id: 49, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 50, active: false, filled: false, shape: false, queen: false},
				{id: 51, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 52, active: false, filled: false, shape: false, queen: false},
				{id: 53, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 54, active: false, filled: false, shape: false, queen: false},
				{id: 55, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 56, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 57, active: false, filled: false, shape: false, queen: false},
				{id: 58, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 59, active: false, filled: false, shape: false, queen: false},
				{id: 60, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 61, active: false, filled: false, shape: false, queen: false},
				{id: 62, active: true, filled: 'secondPlayer', shape: false, queen: false},
				{id: 63, active: false, filled: false, shape: false, queen: false}
			],
			firstPoint: false,
			secondPoint: false,
			thirdPoint: false,
			fourthPoint: false,
			firstPointAfterEating: false,
			secondPointAfterEating: false,
			thirdPointAfterEating: false,
			fourthPointAfterEating: false,
		}
	}

	// Функция чистки всех полей от "возможного хода"

	shapeClear = () => {
		let list = this.state.cells;
		for(let j = 0; j < 63; j++) {
			let cells = list[j];
			cells.shape = false;
			list[j] = cells
		}
	}

	// Функция проверки на королеву 

	checkingQueenClass = n => {
		if(this.state.stepOfFirstPlayer == true) {
		// Проверка на королеву белой шашки, если она достигла последнего ряда
			if(n > 55) {
				let list = this.state.cells;
    			let main = list[n];
    			list[n].queen = true;
    			list[n] = main;
   				this.setState({
   			    	cells: list
   				});
			}
		} else {
		// Проверка на королеву черной шашки, если она достигла первого ряда
			if(n < 8) {
				let list = this.state.cells;
    			let main = list[n];
    			list[n].queen = true;
    			list[n] = main;
   				this.setState({
   			    	cells: list
   				});
			}
		}
	}

	// Проверка на окончание игры
	// выполняется засчет функции counts() посредством подсчета кол-ва фишек

    checkingEndGame = () => {
        let shapeCells = 0;
        let calcShapeCells = this.state.cells.map(cell => {
            if(cell.shape == true) {
                shapeCells = shapeCells + 1;
        	}
        })
        if((shapeCells == 0) && ((this.counts('firstPlayer') == 0) || (this.counts('secondPlayer') == 0))) {
            this.setState({ blockDisplay: 'block' });
        }
    }

	// завершение игры
    // блок дисплея
    // результат, выводимый при отстутствии каких-либо фишек 

  	endGame = () => {
    	this.setState({ blockDisplay: 'block' });
  	}

  	// логика, описывающая действия шашки, 
  	// являющейся королевой после поедания другой шашки
  	// Всего присутствуют 3 крупные функци --
  	// помимо этой - firstHandleClick и secondHandleClick

	queenAfterEating = i => {
		this.setState({ queenStartedFrom: i });
      	console.log('ДАМКА Cъела');
    	let list = this.state.cells;
    	let main = list[i];
    	let shapes = [];
    	let firstDirection = [];
    	let secondDirection = [];
    	let thirdDirection = [];
    	let fourthDirection = [];
    	let renewal = false;
    	let n;
      	let directions = [];
    	if((this.state.stepOfFirstPlayer == true) && (this.state.cells[i].filled == 'firstPlayer')) {

    		// Если ход первого игрока * белая шашка
    		// ниже - перечисление вариантов ходов для королевы

   			for (let n = i+7; n < 63; n += 7) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					firstDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'secondPlayer') && (directions.includes('1'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n < 56) && (this.state.cells[n+7].filled == 'secondPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'secondPlayer') && (!directions.includes('1')) && (n < 56) && (this.state.cells[n+7].filled == false) && (this.state.cells[n+7].active == true)) {
   					directions.push('1');
            firstDirection = [];
   					this.setState({ queenEatedAfterEating: directions, firstPointAfterEating: n });
   					renewal = true;
   				}
   			}
   			for (let n = i+9; n < 63; n += 9) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					secondDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'secondPlayer') && (directions.includes('2'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n < 54) && (this.state.cells[n+9].filled == 'secondPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'secondPlayer') && (!directions.includes('2')) && (n < 54) && (this.state.cells[n+9].filled == false) && (this.state.cells[n+9].active == true)) {
   					directions.push('2');
            secondDirection = [];
   					this.setState({ queenEatedAfterEating: directions, secondPointAfterEating: n });
            renewal = true;
   				}
   			}
   			for (let n = i-7; n > 0; n -= 7) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					thirdDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'secondPlayer') && (directions.includes('3'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n > 7) && (this.state.cells[n-7].filled == 'secondPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'secondPlayer') && (!directions.includes('3')) && (n > 7) && (this.state.cells[n-7].filled == false) && (this.state.cells[n-7].active == true)) {
   					directions.push('3');
            thirdDirection = [];
   					this.setState({ queenEatedAfterEating: directions, thirdPointAfterEating: n });
   					renewal = true;
            console.log(n);
   				}
   			}
   			for (let n = i-9; n > 0; n -= 9) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					fourthDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'secondPlayer') && (directions.includes('4'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n > 9) && (this.state.cells[n-9].filled == 'secondPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'secondPlayer') && (!directions.includes('4')) && (n > 9) && (this.state.cells[n-9].filled == false) && (this.state.cells[n-9].active == true)) {
   					directions.push('4');
            fourthDirection = [];
   					this.setState({ queenEatedAfterEating: directions, fourthPointAfterEating: n });
   					renewal = true;
   				}
   			}
   		} else if ((this.state.stepOfFirstPlayer == false) && (this.state.cells[i].filled == 'secondPlayer')) {

   			// Если ход второго игрока * черная шашка
    		// ниже - перечисление вариантов ходов для королевы

   			for (let n = i+7; n < 63; n += 7) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					firstDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'firstPlayer') && (directions.includes('1'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n < 56) && (this.state.cells[n+7].filled == 'firstPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'firstPlayer') && (!directions.includes('1')) && (n < 56) && (this.state.cells[n+7].filled == false) && (this.state.cells[n+7].active == true)) {
   					directions.push('1');
            firstDirection = [];
   					this.setState({ queenEatedAfterEating: directions, firstPointAfterEating: n });
   					renewal = true;
   				}
   			}
   			for (let n = i+9; n < 63; n += 9) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					secondDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'firstPlayer') && (directions.includes('2'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n < 54) && (this.state.cells[n+9].filled == 'firstPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'firstPlayer') && (!directions.includes('2')) && (n < 54) && (this.state.cells[n+9].filled == false) && (this.state.cells[n+9].active !== false)) {
   					directions.push('2');
            secondDirection = [];
   					this.setState({ queenEatedAfterEating: directions, secondPointAfterEating: n });
   					renewal = true;
   				}
   			}
   			for (let n = i-7; n > 0; n -= 7) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					thirdDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'firstPlayer') && (directions.includes('3'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n > 7) && (this.state.cells[n-7].filled == 'firstPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'firstPlayer') && (!directions.includes('3')) && (n > 7) && (this.state.cells[n-7].filled == false) && (this.state.cells[n-7].active !== false)) {
   					directions.push('3');
            thirdDirection = [];
   					this.setState({ queenEatedAfterEating: directions, thirdPointAfterEating: n });
   					renewal = true;
   				}
   			}
   			for (let n = i-9; n > 0; n -= 9) {
   				if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   					fourthDirection.push(n);
   				} else if(((this.state.cells[n].filled == 'firstPlayer') && (directions.includes('4'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n > 56) && (this.state.cells[n-9].filled == 'firstPlayer'))) {
   					break;
   				} else if((this.state.cells[n].filled == 'firstPlayer') && (!directions.includes('4')) && (n > 9) && (this.state.cells[n-9].filled == false) && (this.state.cells[n-9].active !== false)) {
   					directions.push('4');
            fourthDirection = [];
   					this.setState({ queenEatedAfterEating: directions, fourthPointAfterEating: n });
   					renewal = true;
   				}
   			}
   		}

   		// Наполнение всех возможных направлений ходов

      	if(directions.length > 0) {
        	if(!directions.includes('1')) {
        	  firstDirection = [];
        	}
        	if(!directions.includes('2')) {
        	  secondDirection = [];
        	}
        	if(!directions.includes('3')) {
        	  thirdDirection = [];
        	}
        	if(!directions.includes('4')) {
        	  fourthDirection = [];
        	}
        }

        // Наполнение направлений хода, по которым королева
   		// может съесть вражескую шашку
   		// newArr - массив направлений

   		if(renewal == true) {
   			let newArr = [];
   			if(directions.includes('1')) {
   				shapes = newArr.concat(firstDirection);
   				newArr = shapes;
   			}
   			if(directions.includes('2')) {
   				shapes = newArr.concat(secondDirection);
   				newArr = shapes;
   			}
   			if(directions.includes('3')) {
   				shapes = newArr.concat(thirdDirection);
   				newArr = shapes;
   			}
   			if(directions.includes('4')) {
   				shapes = newArr.concat(fourthDirection);
   				newArr = shapes;
   			}
   			if((!directions.includes('1')) && (!directions.includes('2')) && (!directions.includes('3')) && (!directions.includes('4'))) {
   				shapes = firstDirection.concat(secondDirection, thirdDirection, fourthDirection);
   			}

   			// обозначение возможных ходов 
   			// посредством придачи значения полей shape = true

   			let manifestationOfShapes = shapes.map(shapeList => {
   				list[shapeList].shape = true;
    			list[i].filled = false;
    			list[i].queen = false;
    			list[i] = main;
   				this.setState({
   	    			cells: list
   				});
   			})
   			this.setState({ firstStep: false });
   			return;
   		} else {
   			this.setState({ queenStep: false });
   		}
   		this.setState({ firstStep: true, stepOfFirstPlayer: !this.state.stepOfFirstPlayer, queenStartedFrom: false, firstPointAfterEating: false, secondPointAfterEating: false, thirdPointAfterEating: false, fourthPointAfterEating: false });
   	}

   	// Функция, отвечающая за первый клик
   	// передача -> secondHandleClick НЕ СОВЕРШАЕТСЯ при условии, что существует
   	// возможность поедания вражеской шашки, и при том только одна

	firstHandleClick = i => {
		if((this.state.cells[i].filled !== false) && (this.state.firstStep == true) && (this.state.cells[i].queen == false)) {
    		let list = this.state.cells;
    		let main = list[i];
    		let firstShape;
    		let secondShape;
    		let replace = i;
        	let shapes = [];
    		if(this.state.stepOfFirstPlayer == true) {
   				firstShape = list[i+7];
          		if(i < 55) {
   					secondShape = list[i+9];
          		}
   				if((i < 49) && (list[i+7].filled == 'secondPlayer') && (list[i+14].filled == false)) {
    				firstShape = list[i+14];
    			}
    			if((i < 46) && (list[i+9].filled == 'secondPlayer') && (list[i+18].filled == false)) {
    				secondShape = list[i+18];
    			}
   			} else {
   				firstShape = list[i-7];
   				if(i >8) {
            		secondShape = list[i-9];
          		}
   				if((i > 14) && (list[i-7].filled == 'firstPlayer') && (list[i-14].filled == false)) {
    				firstShape = list[i-14];
    			}
    			if((i > 17) && (list[i-9].filled == 'firstPlayer') && (list[i-18].filled == false)) {
    				secondShape = list[i-18];
    			}
   			}

   			if((firstShape.active == true) && (firstShape.filled == false)) {
   				firstShape.shape = true;
   			}
   			if((secondShape) && (firstShape) && (secondShape.active == true) && (secondShape.filled == false)) {
   				secondShape.shape = true;
   			}

   			if((secondShape) && (secondShape.shape == true) || (firstShape) && (firstShape.shape == true)) {
   				main.filled = false;
   				main.queen = false;
   			} else { 
   				return
   			}
        if(this.state.stepOfFirstPlayer == true) {
          	if((i < 49) && (list[i+7].filled == 'secondPlayer') && (list[i+14].filled == false) && (list[i+14].active == true)) {
            	shapes.push('1');
          	} else {
            	if((list[i+7].active == true) && (list[i+7].filled == false)) {
            	  	list[i+7] = firstShape;
           		}
          	}
          	if((i < 46) && (list[i+9].filled == 'secondPlayer') && (list[i+18].filled == false) && (list[i+18].active == true)) {
            	shapes.push('2');
          	} else {
            	if((secondShape) && (list[i+9].active == true) && (list[i+9].filled == false)) {
            	  	list[i+9] = secondShape;
            	}
          	}
        } else {
          	if((i > 14) && (list[i-7].filled == 'firstPlayer') && (list[i-14].filled == false) && (list[i-14].active == true)) {
            	shapes.push('1');
          	} else {
            	if((list[i-7].active == true) && (list[i-7].filled == false)) {
              		list[i-7] = firstShape;
            	}
          	}
          	if((i > 17) && (list[i-9].filled == 'firstPlayer') && (list[i-18].filled == false) && (list[i-18].active == true)) {
            	shapes.push('2');
          	} else {
            	if((secondShape) && (list[i-9].active == true) && (list[i-9].filled == false)) {
            	  	list[i-9] = secondShape;
            	}
          	}
        }
        this.setState({ notQueenStartedFrom: false });
        if((shapes.includes('1') == true) && (shapes.includes('2') == true)) {
          this.setState({ notQueenStartedFrom: i });
          this.setState({ stepOfFirstPlayer: false });
          this.setState({ firstStep: false });
          return;
          return;
        }else if (shapes.includes('1') == true) {
          if(this.state.stepOfFirstPlayer == true) {
            list[i+14].filled = 'firstPlayer';
            replace += 14;
            list[i+7].filled = false;
            list[i+7].queen = false;
            list[i] = main;
            this.setState({
                cells: list
            });
            this.shapeClear();

            if((replace < 49) && ((list[replace+7].filled == 'secondPlayer') && (list[replace+14].filled == false) && (list[replace+14].active == true) || (replace < 46) && (list[replace+9].filled == 'secondPlayer') && (list[replace+18].filled == false) && (list[replace+18].active == true))) {
              this.checkingQueenClass(replace);
              this.firstHandleClick(replace);
              return;
            } else {
              this.checkingQueenClass(replace);
              this.setState({ stepOfFirstPlayer: !this.state.stepOfFirstPlayer});
              return;
            }
          }else {
            list[i-14].filled = 'secondPlayer';
            replace -= 14;
            list[i-7].filled = false;
            list[i-7].queen = false;
            list[i] = main;
            this.setState({
                cells: list
            });
            this.shapeClear();

            if((replace > 14) && ((list[replace-7].filled == 'firstPlayer') && (list[replace-14].filled == false) && (list[replace-14].active == true) || (replace > 17) && (list[replace-9].filled == 'firstPlayer') && (list[replace-18].filled == false) && (list[replace-18].active == true))) {
              this.checkingQueenClass(replace);
              this.firstHandleClick(replace);
              return;
            } else {
              this.checkingQueenClass(replace);
              this.setState({ stepOfFirstPlayer: !this.state.stepOfFirstPlayer});
              return;
            }
          }
        } else if (shapes.includes('2') == true) {
          if(this.state.stepOfFirstPlayer == true) {
            list[i+18].filled = 'firstPlayer';
            replace += 18;
            list[i+9].filled = false;
            list[i+9].queen = false;
            list[i] = main;
            this.setState({
                cells: list
            });
            this.shapeClear();
            if((replace < 49) && ((list[replace+7].filled == 'secondPlayer') && (list[replace+14].filled == false) && (list[replace+14].active == true) || (replace < 46) && (list[replace+9].filled == 'secondPlayer') && (list[replace+18].filled == false) && (list[replace+18].active == true))) {
              this.checkingQueenClass(replace);
              this.firstHandleClick(replace);
              return;
            } else {
              this.checkingQueenClass(replace);
              this.setState({ stepOfFirstPlayer: !this.state.stepOfFirstPlayer});
              return;
            }
          } else {
            list[i-18].filled = 'secondPlayer';
            replace -= 18;
            list[i-9].filled = false;
            list[i-9].queen = false;
            list[i] = main;
            this.setState({
                cells: list
            });
            this.shapeClear();
            if((replace > 14) && ((list[replace-7].filled == 'firstPlayer') && (list[replace-14].filled == false) && (list[replace-14].active == true) || (replace > 17) && (list[replace-9].filled == 'firstPlayer') && (list[replace-18].filled == false) && (list[replace-18].active == true))) {
              this.checkingQueenClass(replace);
              this.firstHandleClick(replace);
              return;
            } else {
              this.checkingQueenClass(replace);
              this.setState({ stepOfFirstPlayer: !this.state.stepOfFirstPlayer});
              return;
            }
          }
        }
   			list[i] = main;
   			this.setState({
   			    cells: list
   			});
   			this.setState({ firstStep: false });

   		} else if((this.state.cells[i].filled !== false) && (this.state.firstStep == true) && (this.state.cells[i].queen == true)) { 
   			this.setState({ queenStep: true });
    		let list = this.state.cells;
    		let main = list[i];
    		let shapes = [];
    		let firstDirection = [];
    		let secondDirection = [];
    		let thirdDirection = [];
    		let fourthDirection = [];
    		let n;
    		this.setState({ queenStartedFrom: i });
    		if((this.state.stepOfFirstPlayer == true) && (this.state.cells[i].filled == 'firstPlayer')) {
   				for (let n = i+7; n < 63; n += 7) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						firstDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'secondPlayer') && (this.state.queenEated.includes('1'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n < 56) && (this.state.cells[n+7].filled == 'secondPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'secondPlayer') && (!this.state.queenEated.includes('1')) && (n < 56) && (this.state.cells[n+7].filled == false) && (this.state.cells[n+7].active == true)) {
   						let directions = this.state.queenEated;
   						firstDirection = [];
   						directions.push('1');
   						this.setState({ queenEated: directions });
   						this.setState({ firstPoint: n });
   					}
   				}
   				for (let n = i+9; n < 63; n += 9) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						secondDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'secondPlayer') && (this.state.queenEated.includes('2'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n < 54) && (this.state.cells[n+9].filled == 'secondPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'secondPlayer') && (!this.state.queenEated.includes('2')) && (n < 54) && (this.state.cells[n+9].filled == false)) {
   						let directions = this.state.queenEated;
   						secondDirection = [];
   						directions.push('2');
   						this.setState({ queenEated: directions });
   						this.setState({ secondPoint: n });
   					}
   				}
   				for (let n = i-7; n > 0; n -= 7) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						thirdDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'secondPlayer') && (this.state.queenEated.includes('3'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n > 7) && (this.state.cells[n-7].filled == 'secondPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'secondPlayer') && (!this.state.queenEated.includes('3')) && (n > 7) && (this.state.cells[n-7].filled == false)) {
   						let directions = this.state.queenEated;
   						thirdDirection = [];
   						directions.push('3');
   						this.setState({ queenEated: directions });
   						this.setState({ thirdPoint: n });
   					}
   				}
   				for (let n = i-9; n > 0; n -= 9) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						fourthDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'secondPlayer') && (this.state.queenEated.includes('4'))) || (this.state.cells[n].filled == 'firstPlayer') || ((this.state.cells[n].filled == 'secondPlayer') && (n > 9) && (this.state.cells[n-9].filled == 'secondPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'secondPlayer') && (!this.state.queenEated.includes('4')) && (n > 9) && (this.state.cells[n-9].filled == false)) {
   						let directions = this.state.queenEated;
   						fourthDirection = [];
   						directions.push('4');
   						this.setState({ queenEated: directions });
   						this.setState({ fourthPoint: n });
   					}
   				}
   			} else if ((this.state.stepOfFirstPlayer == false) && (this.state.cells[i].filled == 'secondPlayer')) {
   				for (let n = i+7; n < 63; n += 7) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						firstDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'firstPlayer') && (this.state.queenEated.includes('1'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n < 56) && (this.state.cells[n+7].filled == 'firstPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'firstPlayer') && (!this.state.queenEated.includes('1')) && (n < 56) && (this.state.cells[n+7].filled == false) && (this.state.cells[n+7].active == true)) {
   						let directions = this.state.queenEated;
   						firstDirection = [];
   						directions.push('1');
   						this.setState({ queenEated: directions });
   						this.setState({ firstPoint: n });
   					}
   				}
   				for (let n = i+9; n < 63; n += 9) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						secondDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'firstPlayer') && (this.state.queenEated.includes('2'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n < 54) && (this.state.cells[n+9].filled == 'firstPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'firstPlayer') && (!this.state.queenEated.includes('2')) && (n < 54) && (this.state.cells[n+9].filled == false) && (this.state.cells[n+9].active !== false)) {
   						let directions = this.state.queenEated;
   						secondDirection = [];
   						directions.push('2');
   						this.setState({ queenEated: directions });
   						this.setState({ secondPoint: n });
   					}
   				}
   				for (let n = i-7; n > 0; n -= 7) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						thirdDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'firstPlayer') && (this.state.queenEated.includes('3'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n > 7) && (this.state.cells[n-7].filled == 'firstPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'firstPlayer') && (!this.state.queenEated.includes('3')) && (n > 7) && (this.state.cells[n-7].filled == false) && (this.state.cells[n-7].active !== false)) {
   						thirdDirection = [];
   						let directions = this.state.queenEated;
   						directions.push('3');
   						this.setState({ queenEated: directions });
   						this.setState({ thirdPoint: n });
   					}
   				}
   				for (let n = i-9; n > 0; n -= 9) {
   					if((this.state.cells[n].active == true) && (this.state.cells[n].filled == false)) {
   						fourthDirection.push(n);
   					} else if(((this.state.cells[n].filled == 'firstPlayer') && (this.state.queenEated.includes('4'))) || (this.state.cells[n].filled == 'secondPlayer') || ((this.state.cells[n].filled == 'firstPlayer') && (n > 56) && (this.state.cells[n-9].filled == 'firstPlayer'))) {
   						break;
   					} else if((this.state.cells[n].filled == 'firstPlayer') && (!this.state.queenEated.includes('4')) && (n > 9) && (this.state.cells[n-9].filled == false) && (this.state.cells[n-9].active !== false)) {
   						let directions = this.state.queenEated;
   						fourthDirection = [];
   						directions.push('4');
   						this.setState({ queenEated: directions });
   						this.setState({ fourthPoint: n });
   					}
   				}
   			}
   			let newArr = [];
   			if(this.state.queenEated.includes('1')) {
   				shapes = newArr.concat(firstDirection);
   				newArr = shapes;
   			}
   			if(this.state.queenEated.includes('2')) {
   				shapes = newArr.concat(secondDirection);
   				newArr = shapes;
   			}
   			if(this.state.queenEated.includes('3')) {
   				shapes = newArr.concat(thirdDirection);
   				newArr = shapes;
   			}
   			if(this.state.queenEated.includes('4')) {
   				shapes = newArr.concat(fourthDirection);
   				newArr = shapes;
   			}
   			if((!this.state.queenEated.includes('1')) && (!this.state.queenEated.includes('2')) && (!this.state.queenEated.includes('3')) && (!this.state.queenEated.includes('4'))) {
   				shapes = firstDirection.concat(secondDirection, thirdDirection, fourthDirection);
   				if(shapes.length == 0) {
   					this.setState({ firstStep: true });
   					this.setState({ queenStep: false });
   					return;
   				}
   			}
   			let manifestationOfShapes = shapes.map(shapeList => {
   				list[shapeList].shape = true;
    			list[i].filled = false;
    			list[i].queen = false;
    			list[i] = main;
   				this.setState({
   		    		cells: list
   				});
   			})
   			this.setState({ firstStep: false });
   		}
	}

	// Функция второго клика, которая выполняет ход/поедание
	// по обозначенному ходу из firstHandleClick()

	secondHandleClick = i => {
    	let shapeCount = 0;
    	let fixError = this.state.cells.map(cell => {
      		cell.shape == true ? shapeCount += 1 : {};
    	}); 
    	if(shapeCount == 0) {
    	  	this.setState({ firstStep: true });
    	  	return;
    	}

		if((this.state.firstStep == false) && (this.state.cells[i].shape == true) && (((this.state.firstPoint == false) && (this.state.secondPoint == false) && (this.state.thirdPoint == false) && (this.state.fourthPoint == false)) && ((this.state.firstPointAfterEating == false) && (this.state.secondPointAfterEating == false) && (this.state.thirdPointAfterEating == false) && (this.state.fourthPointAfterEating == false)))) {
			let list = this.state.cells;
    		let shapeCell = list[i];
    		if(this.state.stepOfFirstPlayer == true) {
   				shapeCell.filled = 'firstPlayer';
   			} else {
   				shapeCell.filled = 'secondPlayer';
   			}
   			if (this.state.queenStep == true) {
   				shapeCell.queen = true;
   			}
      		if(this.state.notQueenStartedFrom !== false) {
        		this.shapeClear();
        		if(i - this.state.notQueenStartedFrom == 14) {
          			list[i-7].filled = false;
          			list[i-7].queen = false;
          			if((i<49) && (list[i+7].filled == 'secondPlayer') && (list[i+14].filled == false) && (list[i+14].active == true)) {
              			list[i+14].shape = true;
              			list[i].filled = false;
              			list[i+7].filled = false;
              			list[i+7].queen = false;
              			this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
              			this.setState({ firstStep: false });
              			return;
          			}
          			if((i<46) && (list[i+9].filled == 'secondPlayer') && (list[i+18].filled == false) && (list[i+18].active == true)) {
              			list[i+18].shape = true;
              			list[i].filled = false;
              			list[i+9].filled = false;
              			list[i+9].queen = false;
              			this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
              			this.setState({ firstStep: false });
              			return;
          			}
        		}else if(i - this.state.notQueenStartedFrom == 18) {
          			list[i-9].filled = false;
          			list[i-9].queen = false;
          			if((i<49) && (list[i+7].filled == 'secondPlayer') && (list[i+14].filled == false) && (list[i+14].active == true)) {
          			    list[i+14].shape = true;
          			    list[i].filled = false;
          			    list[i+7].filled = false;
          			    list[i+7].queen = false;
          			    this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
          			    this.setState({ firstStep: false });
          			    return;
          			}
          			if((i<46) && (list[i+9].filled == 'secondPlayer') && (list[i+18].filled == false) && (list[i+18].active == true)) {
          			    list[i+18].shape = true;
          			    list[i].filled = false;
          			    list[i+9].filled = false;
          			    list[i+9].queen = false;
          			    this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
          			    this.setState({ firstStep: false });
          			    return;
          			}
        		}else if(this.state.notQueenStartedFrom - i == 14) {
          			list[i+7].filled = false;
          			list[i+7].queen = false;
          			if((i>14) && (list[i-7].filled == 'firstPlayer') && (list[i-14].filled == false) && (list[i-14].active == true)) {
          			    list[i-14].shape = true;
          			    list[i].filled = false;
          			    list[i-7].filled = false;
          			    list[i-7].queen = false;
          			    this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
          			    this.setState({ firstStep: false });
          			    return;
          			}
          			if((i>17) && (list[i-9].filled == 'firstPlayer') && (list[i-18].filled == false) && (list[i-18].active == true)) {
          			    list[i-18].shape = true;
          			    list[i].filled = false;
          			    list[i-9].filled = false;
          			    list[i-9].queen = false;
          			    this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
          			    this.setState({ firstStep: false });
          			    return;
          			}
        		}else if(this.state.notQueenStartedFrom - i == 18) {
        		  	list[i+9].filled = false;
        		  	list[i+9].queen = false;
        		  	if((i>14) && (list[i-7].filled == 'firstPlayer') && (list[i-14].filled == false) && (list[i-14].active == true)) {
        		  	    list[i-14].shape = true;
        		  	    list[i].filled = false;
        		  	    list[i-7].filled = false;
        		  	    list[i-7].queen = false;
        		  	    this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
        		  	    this.setState({ firstStep: false });
        		  	    return;
        		  	}
        		  	if((i>17) && (list[i-9].filled == 'firstPlayer') && (list[i-18].filled == false) && (list[i-18].active == true)) {
        		  	    list[i-18].shape = true;
        		  	    list[i].filled = false;
        		  	    list[i-9].filled = false;
        		  	    list[i-9].queen = false;
        		  	    this.setState({ stepOfFirstPlayer: this.state.firstPlayer });
        		  	    this.setState({ firstStep: false });
        		  	    return;
        		  	}
        		}
      		}
   			list[i] = shapeCell;
   			this.checkingQueenClass(i);
   			this.shapeClear();
   			this.setState({
   			    cells: list
   			});
			this.setState({ firstStep: true, stepOfFirstPlayer: !this.state.stepOfFirstPlayer, queenStep: false });
		} else if((this.state.firstStep == false) && (this.state.cells[i].shape == true) && (this.state.queenStep == true)) {
			let list = this.state.cells;
    		let shapeCell = list[i];
    		if(this.state.stepOfFirstPlayer == true) {
   				shapeCell.filled = 'firstPlayer';
   			} else {
   				shapeCell.filled = 'secondPlayer';
   			}
   			shapeCell.queen = true;
   			if(this.state.queenEated.length !== 0) {
   				if(((this.state.queenStartedFrom - i) % 7 == 0) && (this.state.queenStartedFrom - this.state.firstPoint < 0)) {
   					list[this.state.firstPoint].filled = false;
   					list[this.state.firstPoint].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				} else if(((this.state.queenStartedFrom - i) % 9 == 0) && (this.state.queenStartedFrom - this.state.secondPoint < 0)) {
   					list[this.state.secondPoint].filled = false;
   					list[this.state.secondPoint].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				} else if(((this.state.queenStartedFrom - i) % 7 == 0) && (this.state.queenStartedFrom - this.state.thirdPoint > 0)) {
   					list[this.state.thirdPoint].filled = false;
   					list[this.state.thirdPoint].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				} else if(((this.state.queenStartedFrom - i) % 9 == 0) && (this.state.queenStartedFrom - this.state.fourthPoint > 0)) {
   					list[this.state.fourthPoint].filled = false;
   					list[this.state.fourthPoint].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				}
   			} else if(this.state.queenEatedAfterEating.length !== 0) {
   				if(((this.state.queenStartedFrom - i) % 7 == 0) && (this.state.queenStartedFrom - this.state.firstPointAfterEating < 0) && (this.state.queenStartedFrom < i)) {
   					list[this.state.firstPointAfterEating].filled = false;
   					list[this.state.firstPointAfterEating].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				} else if(((this.state.queenStartedFrom - i) % 9 == 0) && (this.state.queenStartedFrom - this.state.secondPointAfterEating < 0) && (this.state.queenStartedFrom < i)) {
   					list[this.state.secondPointAfterEating].filled = false;
   					list[this.state.secondPointAfterEating].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				} else if(((this.state.queenStartedFrom - i) % 7 == 0) && (this.state.queenStartedFrom - this.state.thirdPointAfterEating > 0) && (this.state.queenStartedFrom > i)) {
   					list[this.state.thirdPointAfterEating].filled = false;
   					list[this.state.thirdPointAfterEating].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				} else if(((this.state.queenStartedFrom - i) % 9 == 0) && (this.state.queenStartedFrom - this.state.fourthPointAfterEating > 0) && (this.state.queenStartedFrom > i)) {
   					list[this.state.fourthPointAfterEating].filled = false;
   					list[this.state.fourthPointAfterEating].queen = false;
   					this.setState({
   				   		cells: list
   					});
   				}
   			}	
   			list[i] = shapeCell;
   			this.checkingQueenClass(i);
   			for(let j = 0; j < 63; j++) {
				let cells = list[j];
				cells.shape = false;
				list[j] = cells
			}
   			this.setState({
   			    cells: list
   			});
   			this.setState({ queenEated: [] });
   			this.setState({ firstPoint: false });
			  this.setState({ secondPoint: false });
			  this.setState({ thirdPoint: false });
			  this.setState({ fourthPoint: false });

   			if(((this.state.queenEated.length !== 0) || (this.state.queenEatedAfterEating.length !== 0)) && (this.state.queenStep == true) && (this.state.cells[i].queen == true)) {
          this.setState({ queenEatedAfterEating: [] })
				  this.queenAfterEating(i);
   				return;
   			}
   			this.setState({ queenStep: false });
			this.setState({ firstStep: true });
			this.setState({ stepOfFirstPlayer: !this.state.stepOfFirstPlayer });
		}
	}

  counts = i => {
    let count = 0;
    let shapeCells = 0;
    let calcShapeCells = this.state.cells.map(eCell => {
      if(eCell.shape == true) {
        shapeCells = shapeCells + 1;
      }
    });
    this.state.cells.map(cell =>
      cell.filled == i ? count += 1 : {}
    );
    if((shapeCells !== 0) && (i == 'firstPlayer') && (this.state.stepOfFirstPlayer == true)) {
      count += 1;
    } else if((shapeCells !== 0) && (i == 'secondPlayer') && (this.state.stepOfFirstPlayer == false)) {
      count += 1;
    }
    return count;
  }

  firstPlayerLosing = () => {
    this.setState({ blockDisplay: 'block' });
  }

  secondPlayerLosing = () => {
    this.setState({ blockDisplay: 'block' });
  }

  setShortTiming = () => {
    this.setState({ startingTime: 300})
  }

  setMediumTiming = () => {
    this.setState({ startingTime: 600})
  }

  setLongTiming = () => {
    this.setState({ startingTime: 900})
  }

  restartGame = () => {
    this.setState({ cells: [
        {id: 0, active: false, filled: false, shape: false, queen: false},
        {id: 1, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 2, active: false, filled: false, shape: false, queen: false},
        {id: 3, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 4, active: false, filled: false, shape: false, queen: false},
        {id: 5, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 6, active: false, filled: false, shape: false, queen: false},
        {id: 7, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 8, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 9, active: false, filled: false, shape: false, queen: false},
        {id: 10, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 11, active: false, filled: false, shape: false, queen: false},
        {id: 12, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 13, active: false, filled: false, shape: false, queen: false},
        {id: 14, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 15, active: false, filled: false, shape: false, queen: false},
        {id: 16, active: false, filled: false, shape: false, queen: false},
        {id: 17, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 18, active: false, filled: false, shape: false, queen: false},
        {id: 19, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 20, active: false, filled: false, shape: false, queen: false},
        {id: 21, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 22, active: false, filled: false, shape: false, queen: false},
        {id: 23, active: true, filled: 'firstPlayer', shape: false, queen: false},
        {id: 24, active: true, filled: false, shape: false, queen: false},
        {id: 25, active: false, filled: false, shape: false, queen: false},
        {id: 26, active: true, filled: false, shape: false, queen: false},
        {id: 27, active: false, filled: false, shape: false, queen: false},
        {id: 28, active: true, filled: false, shape: false, queen: false},
        {id: 29, active: false, filled: false, shape: false, queen: false},
        {id: 30, active: true, filled: false, shape: false, queen: false},
        {id: 31, active: false, filled: false, shape: false, queen: false},
        {id: 32, active: false, filled: false, shape: false, queen: false},
        {id: 33, active: true, filled: false, shape: false, queen: false},
        {id: 34, active: false, filled: false, shape: false, queen: false},
        {id: 35, active: true, filled: false, shape: false, queen: false},
        {id: 36, active: false, filled: false, shape: false, queen: false},
        {id: 37, active: true, filled: false, shape: false, queen: false},
        {id: 38, active: false, filled: false, shape: false, queen: false},
        {id: 39, active: true, filled: false, shape: false, queen: false},
        {id: 40, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 41, active: false, filled: false, shape: false, queen: false},
        {id: 42, active: true, filled:'secondPlayer', shape: false, queen: false},
        {id: 43, active: false, filled: false, shape: false, queen: false},
        {id: 44, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 45, active: false, filled: false, shape: false, queen: false},
        {id: 46, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 47, active: false, filled: false, shape: false, queen: false},
        {id: 48, active: false, filled: false, shape: false, queen: false},
        {id: 49, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 50, active: false, filled: false, shape: false, queen: false},
        {id: 51, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 52, active: false, filled: false, shape: false, queen: false},
        {id: 53, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 54, active: false, filled: false, shape: false, queen: false},
        {id: 55, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 56, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 57, active: false, filled: false, shape: false, queen: false},
        {id: 58, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 59, active: false, filled: false, shape: false, queen: false},
        {id: 60, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 61, active: false, filled: false, shape: false, queen: false},
        {id: 62, active: true, filled: 'secondPlayer', shape: false, queen: false},
        {id: 63, active: false, filled: false, shape: false, queen: false}
      ]});
    this.setState({ countFirstPlayer: 12 });
    this.setState({ countSecondPlayer: 12 });
    this.setState({ queenStep: false });
    this.setState({ queenStartedFrom: false });
    this.setState({ queenEated: [] });
    this.setState({ queenEatedAfterEating: [] });
    this.setState({ firstStep: true });
    this.setState({ stepOfFirstPlayer: true });
    this.setState({ notQueenStartedFrom: false });
    this.setState({ firstPoint: false });
    this.setState({ secondPoint: false });
    this.setState({ thirdPoint: false });
    this.setState({ fourthPoint: false });
    this.setState({ firstPointAfterEating: false });
    this.setState({ secondPointAfterEating: false });
    this.setState({ thirdPointAfterEating: false });
    this.setState({ fourthPointAfterEating: false });
    this.setState({ blockDisplay: 'none' });
  }

	renderCell(i) {
		return(
			<Cell
        checkingEndGame={this.checkingEndGame}
				firstStep={this.state.firstStep}
				stepOfFirstPlayer={this.state.stepOfFirstPlayer}
				secondHandleClick={this.secondHandleClick}
				shape={this.state.cells[i].shape}
				firstHandleClick={this.firstHandleClick}
				filled={this.state.cells[i].filled}
				active={this.state.cells[i].active}
				id={this.state.cells[i].id}
				queen={this.state.cells[i].queen}
			/>
		)
	}

  renderTimer() {
    return(
      <Timer 
        setShortTiming={this.setShortTiming}
        setMediumTiming={this.setMediumTiming}
        setLongTiming={this.setLongTiming}
        startingTime={this.state.startingTime}
        blockDisplay={this.state.blockDisplay}
        firstPlayerLosing={this.firstPlayerLosing}
        secondPlayerLosing={this.secondPlayerLosing}
        stepOfFirstPlayer={this.state.stepOfFirstPlayer}
      />
    )
  }

  render() {
    let display = {display: this.state.blockDisplay };
      return (
        <div className='main'>
        	<div className='table'>
        		{ this.renderCell(0) }
				    { this.renderCell(1) }
				    { this.renderCell(2) }
				    { this.renderCell(3) }
				    { this.renderCell(4) }
				    { this.renderCell(5) }
				    { this.renderCell(6) }
				    { this.renderCell(7) }
				    { this.renderCell(8) }
				    { this.renderCell(9) }
				    { this.renderCell(10) }
				    { this.renderCell(11) }
				    { this.renderCell(12) }
				    { this.renderCell(13) }
				    { this.renderCell(14) }
				    { this.renderCell(15) }
				    { this.renderCell(16) }
				    { this.renderCell(17) }
				    { this.renderCell(18) }
				    { this.renderCell(19) }
				    { this.renderCell(20) }
				    { this.renderCell(21) }
				    { this.renderCell(22) }
				    { this.renderCell(23) }
				    { this.renderCell(24) }
				    { this.renderCell(25) }
				    { this.renderCell(26) }
				    { this.renderCell(27) }
				    { this.renderCell(28) }
				    { this.renderCell(29) }
				    { this.renderCell(30) }
				    { this.renderCell(31) }
				    { this.renderCell(32) }
				    { this.renderCell(33) }
				    { this.renderCell(34) }
				    { this.renderCell(35) }
				    { this.renderCell(36) }
				    { this.renderCell(37) }
				    { this.renderCell(38) }
				    { this.renderCell(39) }
				    { this.renderCell(40) }
				    { this.renderCell(41) }
				    { this.renderCell(42) }
				    { this.renderCell(43) }
				    { this.renderCell(44) }
				    { this.renderCell(45) }
				    { this.renderCell(46) }
				    { this.renderCell(47) }
				    { this.renderCell(48) }
				    { this.renderCell(49) }
				    { this.renderCell(50) }
				    { this.renderCell(51) }
				    { this.renderCell(52) }
				    { this.renderCell(53) }
				    { this.renderCell(54) }
				    { this.renderCell(55) }
				    { this.renderCell(56) }
				    { this.renderCell(57) }
				    { this.renderCell(58) }
				    { this.renderCell(59) }
				    { this.renderCell(60) }
				    { this.renderCell(61) }
				    { this.renderCell(62) }
				    { this.renderCell(63) }
        	</div>
          { this.renderTimer() }
          <button className='restart-button' onClick={this.endGame}>
            <p>restart</p>
          </button>
          <div className='current-information'>
            <div className='step'>
              <p>Ход игрока { this.state.stepOfFirstPlayer == true ? 1 : 2} </p>
            </div>
            <hr />
            <div className='counts'>
              <div className='count'>
                <div></div><p>{this.counts('firstPlayer')} </p>
              </div>
              <div className='count'>
                <div></div><p>{this.counts('secondPlayer')} </p>
              </div>
            </div>
          </div>
          <div className='block-game'
               style={display}>
            <button
              onClick={this.restartGame}
              > 
              <p>start game</p>
            </button>
          </div>
        </div>
      );
  }
} 

export default App; 