class Robot
    attr_reader :bearing, :x, :y
    
    def directions
        {   
            north: 
            {
                left:  :west,
                right: :east
            },
            east:
            {
                left:  :north,
                right: :south
            },
            west: 
            {
                left:  :south,
                right: :north
            },
            south:
            {
                left:  :east,
                right: :west
            }
        }
    end

    def orient(direction)
        raise ArgumentError unless directions.keys.include? direction
        @bearing = direction
    end

    def turn_right
        orient(directions[bearing][:right])
    end

    def turn_left
        orient(directions[bearing][:left])
    end

    def at(x, y)
        @x = x
        @y = y
    end

    def coordinates
        [x, y]
    end

    def advance
        if bearing == :north
            @y += 1
        elsif bearing == :south
            @y -= 1
        elsif bearing == :east
            @x += 1
        elsif bearing == :west
            @x -= 1
        end
    end
end

class Simulator
    INSTRUCTIONS = 
    {
        'L' => :turn_left,
        'R' => :turn_right,
        'A' => :advance
    }

    def instructions(input)
        input.split("").map { |n| INSTRUCTIONS[n] }
    end

    def place(robot, data)
        robot.at(data[:x], data[:y])
        robot.orient(data[:direction])
    end

    def evaluate(robot, input)
        instructions(input).each { |instruction| robot.send(instruction) }
    end
end