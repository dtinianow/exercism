class Robot
    DIRECTIONS = { north: [0,1], east: [1,0], south: [0,-1], west: [-1,0] }

    attr_reader :bearing, :x, :y

    def orient(direction)
        raise ArgumentError unless DIRECTIONS.keys.include? direction
        @bearing = direction
    end

    def turn_right
        orient(DIRECTIONS.keys[((DIRECTIONS.keys.index(bearing) + 1) % 4)])
    end

    def turn_left
        orient(DIRECTIONS.keys[((DIRECTIONS.keys.index(bearing) - 1) % 4)])
    end

    def at(x, y)
        @x = x
        @y = y
    end

    def coordinates
        [x, y]
    end

    def advance
        @x += DIRECTIONS[bearing].first
        @y += DIRECTIONS[bearing].last
    end
end

class Simulator
    INSTRUCTIONS = { 'L' => :turn_left, 'R' => :turn_right, 'A' => :advance }

    def instructions(steps)
        steps.each_char.map { |c| INSTRUCTIONS[c] }
    end

    def place(robot, x:, y:, direction:)
        robot.at(x, y)
        robot.orient(direction)
    end

    def evaluate(robot, steps)
        instructions(steps).each { |step| robot.send(step) }
    end
end