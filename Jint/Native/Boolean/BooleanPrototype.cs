﻿using System;
using Jint.Native.Object;
using Jint.Runtime;
using Jint.Runtime.Interop;

namespace Jint.Native.Boolean
{
    /// <summary>
    ///     http://www.ecma-international.org/ecma-262/5.1/#sec-15.6.4
    /// </summary>
    public sealed class BooleanPrototype : BooleanInstance
    {
        private BooleanPrototype(Engine engine) : base(engine)
        {
        }

        public static BooleanPrototype CreatePrototypeObject(Engine engine, BooleanConstructor booleanConstructor)
        {
            var obj = new BooleanPrototype(engine);
            obj.Prototype = engine.Object.PrototypeObject;
            obj.PrimitiveValue = false;
            obj.Extensible = true;

            obj.FastAddProperty("constructor", booleanConstructor, false, false, false);

            return obj;
        }

        public void Configure()
        {
            FastAddProperty("toString", new ClrFunctionInstance<object, bool>(Engine, ToBooleanString), true, false, true);
            FastAddProperty("valueOf", new ClrFunctionInstance<object, object>(Engine, ValueOf), true, false, true);
        }

        private object ValueOf(object thisObj, object[] arguments)
        {
            var B = thisObj;
            object b;
            if (TypeConverter.GetType(B) == TypeCode.Boolean)
            {
                b = B;
            }
            else
            {
                var o = B as BooleanInstance;
                if (o != null)
                {
                    return o.PrimitiveValue;
                }
                else
                {
                    throw new JavaScriptException(Engine.TypeError);
                }
            }

            return b;
        }

        private bool ToBooleanString(object thisObj, object[] arguments)
        {
            throw new NotImplementedException();
        }
    }
}