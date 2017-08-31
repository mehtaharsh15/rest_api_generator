"""Decorator example."""


def print_callable(f):
    """Decorator."""
    def decorated(*args, **kwargs):
        print f, type(f)
        return f(*args, **kwargs)
    return decorated


@print_callable
def multiply(x, y):
    """Multiply."""
    print x * y


def decoratorFunctionWithArguments(arg1, arg2, arg3):
    def wrap(f):
        print "Inside wrap()"
        def wrapped_f(*args):
            print "Inside wrapped_f()"
            print "Decorator arguments:", arg1, arg2, arg3
            #f(*args)
	    return 'hello'
            print "After f(*args)"
        return wrapped_f
    return wrap

@decoratorFunctionWithArguments("hello", "world", 42)
def sayHello(a1, a2, a3, a4):
    print 'sayHello arguments:', a1, a2, a3, a4


print sayHello(1, 2, 3, 4)
