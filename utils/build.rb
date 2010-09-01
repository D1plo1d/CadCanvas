SRC = File.dirname(__FILE__)+"/../src/"
js = ""

#finding js src files (TODO: recursive directory search)
Dir.new(SRC).each {|f|
  js = js + " --js '"+File.concat(SRC,f)+"'" if File.extname(f)==".js"
  puts f
}
puts js
command = "cd closure; "+
  "java -jar compiler.jar --js '../closure.js'" +js+" --js_output_file '../../build/cad_canvas.js'"

#compiling
puts "compiling.."

IO.popen (command) { |f| puts ""+(f.gets()||"") }

